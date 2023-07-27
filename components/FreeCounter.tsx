'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MAX_FREE_COUNTS } from '@/constants'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import { useProModal } from '@/hooks/useProModal'

interface FreeCounterProps {
  apiLimitCount: number
  isPro: boolean
}

const FreeCounter: React.FC<FreeCounterProps> = ({
  apiLimitCount = 0,
  isPro = false,
}) => {
  const proModal = useProModal()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  if (isPro) {
    return null
  }
  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3 shadow-inner shadow-black"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            variant="premium"
            className="w-full"
            onClick={proModal.onOpen}
          >
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
export default FreeCounter
