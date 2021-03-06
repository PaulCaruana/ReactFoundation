import { Logo } from "../components/Logo"
import { Button } from "../components/Button"
import React from "react";
export default function Home() {
  // Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  // Read the documentation to get started: https://tailwindui.com/documentation
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='flex justify-center'>
          <Logo itHovers />
        </div>
        <div className='h-10'></div>
        <h1>Welcome to My Next App!</h1>
        <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
          Ready to dive in?
          <br />
          Start building something amazing.
        </h2>
        <div className='mt-8 flex justify-center'>
          <Button href='/'>Get started</Button>
          <Button href='#' isVariant className='ml-3'>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  )
}
