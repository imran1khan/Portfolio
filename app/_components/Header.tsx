import React from 'react'
import "./header.css";
import { CONFIG as config } from '@/styles/config';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { cn } from '@/components/lib/utils';

//import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@/components/ui/tooltip';
const socialBorder = `border group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;
function Header() {
  return (
    <header className='flex flex-row justify-between  items-center w-full md:px-6'>
      <div className='flex gap-2'>
        <img className='rounded-full' width={70} height={70} src="https://avatars.githubusercontent.com/u/107169527?v=4" alt="" />
        <div className=''>
          <div className='font-semibold text-2xl'>{config.name}</div>
          <div className='text-neutral-400'>{config.title}</div>
        </div>
      </div>
      {/* disktop */}
      <div className="hidden md:flex flex-row space-x-2">
        <Tooltip.Provider delayDuration={70}>
          {
            config.socials.map((v, i) => (
              <Tooltip.Root key={i + v.link}>
                <Tooltip.Trigger className=''>
                  <Link href={v.link} target='_blank' className='border border-[#2f2f2f] hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-md 
                bg-[#181818]  outline-none hover:outline-[1px] hover:outline-white hover:bg-black focus:bg-black'>
                    {v.icon}
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content side='bottom' className="select-none rounded-[4px] bg-black px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                    sideOffset={5}>
                    {v.platform}
                    <Tooltip.Arrow className="fill-black" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))
          }
        </Tooltip.Provider>
      </div>
      <div className='hidden max-md:block'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-md w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-[#181818] hover:bg-violet3  focus:shadow-black"
              aria-label="Customise options"
            >
              <Ellipsis />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
            side='bottom'
              className={cn("min-w-[220px] md:hidden bg-[#181818] rounded-md p-[5px] mr-3")}
              sideOffset={5}
            >
              {
                config.socials.map((v, i) => (
                  <Link key={i+v.link+v.platform} href={v.link} target='_blank'>
                  <DropdownMenu.Item key={i+v.link+v.platform} className={cn(`cursor-pointer hover:bg-[#1f1f1f] text-[15px] rounded-[3px] flex items-center h-[25px] py-5 px-5`)}>
                    {v.platform}
                    <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                      {v.icon}
                    </div>
                  </DropdownMenu.Item>
                  </Link>
                ))
              }
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  )
}

export default Header

/*
<Tooltip key={i}>
  <TooltipTrigger className={`bg-[#181818] ${socialBorder}`}>
    <Link
      href={v.link}
      target='_blank'
      className='cursor-pointer'
    >
      {v.icon}
    </Link>
  </TooltipTrigger>
  <TooltipContent
    side='top'
    className='bg-[#181818] mr-4 px-3 py-1.5 text-xs'
  >
    {v.platform}
  </TooltipContent>
</Tooltip>

*/