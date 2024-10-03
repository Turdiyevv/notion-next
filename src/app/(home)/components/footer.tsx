import React from "react";
import {Logo} from "@/app/(home)/components/logo";
import {Button} from "@/components/ui/button";
export const Footer = () => {
  return(
      <div className={"flex items-center w-full p-6 bg-background z-50"}>
          <Logo/>
          <div className={"w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground"}>
              <Button size={"sm"} variant={"ghost"}>Privacy Policy</Button>
              <Button size={"sm"} variant={"ghost"}>Terms & Conditions</Button>
          </div>
      </div>
  )
}
