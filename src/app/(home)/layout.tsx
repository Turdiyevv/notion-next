import React from "react";
import {ChildProps} from "../../../types";
import {Navbar} from "@/app/(home)/components";

const Layout = ({children}: ChildProps) => {
    return(
          <div className={'layout__cl h-full'}>
              <Navbar/>
              <main className={"h-full pt-40"}>
                  {children}
              </main>
          </div>
    )
}
export default Layout;
