'use client';

import { Button } from 'flowbite-react';

export default function TechieventButton() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="pinkToOrange" className='border-2 border-pink-700'>
        Get events
      </Button>
    </div>
  );
}