import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'
import { GetApiLimitCount } from '@/lib/ApiLimit'
import { checkSubscription } from '@/lib/Subscription'

const Navbar = async () => {
  const isPro = await checkSubscription()
  const apiLimitCount = await GetApiLimitCount()
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
export default Navbar
