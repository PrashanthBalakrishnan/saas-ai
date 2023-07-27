'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Zap } from 'lucide-react'
import { useState } from 'react'

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  isPro = false,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      console.log('Billing Error', error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  )
}
export default SubscriptionButton
