import React from "react";
import {ChildProps} from "../../../types";
import {Navbar} from "@/app/(home)/components";

const Layout = ({children}: ChildProps) => {
    return(
      <>
          <title>Layout app</title>
          <div className={'layout__cl'}>
              <Navbar/>
              <main>
                  {children}
              </main>
          </div>
      </>
    )
}
export default Layout;
