import OrderCard from '@/components/Cards/OrderCard'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col w-full items-center justify-evenly">
        <OrderCard
          name="Order Walk Through"
          content="Walk me through ordering for a project"
        />
        <OrderCard
          name="I know what I want"
          content="I what I want to order so let me decide please"
        />
        <OrderCard name="Order With AI" content="Coming soon!!" />
      </div>
      <div>Add other content here</div>
    </div>
  )
}
