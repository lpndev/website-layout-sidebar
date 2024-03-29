import * as React from 'react'
import Link from 'next/link'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

function Footer() {
  return (
    <footer className='border-t border-foreground/10 p-4'>
      <div className='mx-auto max-w-screen-xl'>
        <div>Footer</div>
      </div>
    </footer>
  )
}

function Header() {
  return (
    <header className='border-b border-foreground/10 p-4'>
      <div className='mx-auto flex max-w-screen-xl flex-row items-center justify-between'>
        <div className='inline-flex items-center gap-4'>
          <Button
            variant='outline'
            size='icon'
            className='inline-flex h-8 w-8 md:hidden'
          >
            <Menu size={16} />
          </Button>
          <Link href='/' className='font-medium'>
            Logo
          </Link>
        </div>
        <div className='inline-flex items-center gap-4'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <aside className='sticky top-0 hidden w-72 border-r border-foreground/10 p-4 md:flex'>
      <div className='flex w-full flex-col gap-8'>
        <div>Sidebar</div>
      </div>
    </aside>
  )
}

export { Footer, Header, Sidebar }
