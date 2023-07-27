import { auth } from '@clerk/nextjs'

import prismadb from '@/lib/prismadb'
import { MAX_FREE_COUNTS } from '@/constants'

export const IncrementApiLimit = async () => {
  const { userId } = auth()
  if (!userId) {
    return
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  })

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    })
  } else {
    await prismadb.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    })
  }
}

export const CheckApiLimit = async () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  })

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true
  } else {
    return false
  }
}

export const GetApiLimitCount = async () => {
  const { userId } = auth()

  if (!userId) {
    return 0
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  })

  if (!userApiLimit) {
    return 0
  }

  return userApiLimit.count
}
