'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function TechieventNavbar() {
  return (
    <Navbar className='fixed w-screen bg-pink-600 border-b-4 border-pink-700' fluid rounded>
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
