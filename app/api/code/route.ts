import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

import { IncrementApiLimit, CheckApiLimit } from '@/lib/ApiLimit'
import { checkSubscription } from '@/lib/Subscription'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator!. You must only answer in markdown code snippets!. Use code comments for explanation',
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('No API key found', { status: 500 })
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 })
    }

    const freeTrial = await CheckApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse('Free trial has expired', { status: 403 })
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    })

    if (!isPro) {
      await IncrementApiLimit()
    }
    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log('[CODE_ERROR]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
