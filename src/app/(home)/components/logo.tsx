import React from "react";
import Image from "next/image";

export const Logo = () => {
  return <div className={"flex items-center gap-x-2 w-full"}>
    <Image src={"/layout-light.svg"}
           alt={"logo1"}
           width={50} height={50}
           className={"object-cover dark:hidden"}
    />
    <Image src={"/layout-dark.svg"}
           alt={"logo1"}
           width={50} height={50}
           className={"object-cover hidden dark:block"}
    />
    <p className={"font-semibold"}>App-site</p>
  </div>
}
