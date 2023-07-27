import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { GetApiLimitCount } from '@/lib/ApiLimit'
import { checkSubscription } from '@/lib/Subscription'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const isPro = await checkSubscription()
  const apiLimitCount = await GetApiLimitCount()
  return (
    <div className="relative h-full">
      <div className=" hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
export default DashboardLayout
