'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function TechieventNavbar() {
  return (
    <Navbar className='sticky border-pink-700 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' fluid rounded>
      <Navbar.Brand as={Link} href="https://techievent.io">
        {/* <img src="../../public/techievent.svg" className="mr-3 h-6 sm:h-9" alt="techievent.io" /> */}
        <span className="text-xl font-semibold text-red-50">techievent.io</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className='text-red-50' href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className='text-red-50' as={Link} href="/events">
          Events
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
