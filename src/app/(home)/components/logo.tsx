import React from "react";
import Image from "next/image";

export const Logo = () => {
  return <div className={"flex items-center gap-x-2"}>
    <Image src={"/cycling-icon.svg"}
           alt={"logo1"}
           width={50} height={50}
           className={"object-cover"}
    />
    <p className={"font-semibold"}>App site</p>
  </div>
}
