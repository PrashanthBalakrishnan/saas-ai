import Heading from '@/components/Heading'
import SubscriptionButton from '@/components/SubscriptionButton'
import { checkSubscription } from '@/lib/Subscription'
import { Settings } from 'lucide-react'

const SettingsPage = async () => {
  const isPro = await checkSubscription()
  return (
    <div>
      <Heading
        title="Settings"
        desc="Manage account settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? 'You are current on a pro plan.'
            : 'You are currently on a free plan.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}
export default SettingsPage
