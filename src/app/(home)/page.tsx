import React from "react";
import {Cards, Clients, Footer, Heroes} from "@/app/(home)/components";

const Main = () => {
    return(
          <div className={"min-h-full flex flex-col"}>
              <div className={"flex flex-col items-center justify-center text-center gap-y-8" +
                  "flex-1 px-6 pb-10"}
              >
                  <Heroes/>
                  <Clients/>
              </div>
              <Cards/>
              <Footer/>
          </div>
    )
}
export default Main;
