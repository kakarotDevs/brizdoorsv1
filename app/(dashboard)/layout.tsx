'use client'
import { useState, useEffect } from 'react'
import Loader from '@/components/common/Loader'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { PIMagnifyingGlass } from '@/components/Icons/PIcons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="sm:block px-6 pt-6 ">
                    <form
                      action="https://formbold.com/s/unique_form_id"
                      method="POST"
                    >
                      <div className="relative">
                        <button className="absolute left-2 top-1/2 -translate-y-1/2">
                          <PIMagnifyingGlass />
                        </button>

                        <input
                          type="text"
                          placeholder="Type to search..."
                          className="h-10 w-full rounded-md bg-transparent pl-10 pr-4 font-medium focus:outline-none xl:w-125 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          )}
        </div>
      </body>
    </html>
  )
}
