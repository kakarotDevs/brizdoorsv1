import { PIUserIcon } from '@/components/Icons/PIcons'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/dashboard' : '/new-user'

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto w-full max-w-[600px]">
        <h1 className="mb-4 text-6xl">Commercial doors</h1>
        <p className="mb-4 text-white/60">A place to buy awesome doors</p>
        <div>
          <Link
            href={href}
            className="inline-flex items-center justify-center gap-5 rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <PIUserIcon />
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}
