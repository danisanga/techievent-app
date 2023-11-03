'use client'

import { Footer } from 'flowbite-react';

export default function TechieventFooter() {
  return (
    <Footer container>
      <div className="w-full text-center fixed right-0 left-0 bottom-0 z-20 h-18 sm:h-12 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6">
        <Footer.Copyright className='w-full text-red-50'
          by=" Made with ❤️ by Dani Sanchez "
          href="https://github.com/danisanga"
          year={2023}
        />
      </div>
    </Footer>
  )
}
