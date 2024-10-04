"use client"

import React from "react";
import {Logo} from "@/app/(home)/components/logo";
import {ModeToggle} from "@/shared/mode-toggle";
import {Button} from "@/components/ui/button";
import {useScrolled} from "@/hooks/use-scrolled";
import {cn} from "@/lib/utils";
import {SignInButton} from "@clerk/clerk-react";

export const Navbar = () => {
    const scrolled = useScrolled();
    return(
          <div className={cn(
              'z-50 bg-background fixed top-0 flex item-center w-full p-6 justify-between',
              scrolled && 'border-b shadow-sm'
              )}>
              <Logo/>
              <div className={"flex items-center gap-x-2"}>
                  <SignInButton mode={"modal"}>
                    <Button size={"sm"} variant={"ghost"}>Log in</Button>
                  </SignInButton>
                  <SignInButton mode={"modal"}>
                    <Button size={"sm"}>Get free</Button>
                  </SignInButton>
                  <ModeToggle/>
              </div>
          </div>
    )
}
