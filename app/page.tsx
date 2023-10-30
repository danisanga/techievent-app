import CustomFooter from "./components/CustomFooter";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col justify-around items-center text-white">
        <div>
          <h1 className="z-10 relative text-5xl 2xl:text-9xl xl:text-9xl lg:text-9xl md:text-8xl sm:text-8xl font-bold text-red-50 antialiased">
            <svg className="text-red-50 2xl:block xl:block lg:block hidden md:hidden sm:hidden font-bold -rotate-45 w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
            techievent.io
            </h1>
        </div>
        
        <div className="w-full text-justify mx-auto max-w-2xl flex-shrink-0">
          <p className="text-center text-md sm:text-xl font-medium mb-8 antialiased leading-relaxed">
            Discover tech events happening right around your corner.
            <br />
            Set up reminders so you never miss a beat.
            <br />
            Network and swing open doors for your future!
          </p>
        </div>

        <div className="w-auto pb-12 text-3xl font-semibold antialiased">
          Coming Soon!
        </div>
      </div>

      <CustomFooter />
    </main>
  )
}
