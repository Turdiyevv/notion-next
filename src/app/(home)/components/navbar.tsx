import React from "react";
import {Logo} from "@/app/(home)/components/logo";

export const Navbar = () => {
    return(
      <>
          <div className={'z-50 bg-slate-200 fixed top-0 flex item-center w-full p-6'}>
              <Logo/>
              <div className={"flex items-center gap-x-2"}>

              </div>
          </div>
      </>
    )
}
