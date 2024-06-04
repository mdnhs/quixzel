import Image from "next/image";
import React from "react";

type NavBarProps = {};

const leftMenus = [
  { id: 1, name: "home", link: "/" },
  { id: 2, name: "works", link: "/" },
  { id: 3, name: "faq", link: "/" },
];
const rightMenus = [
  { id: 1, name: "services", link: "/" },
  { id: 2, name: "contact", link: "/" },
  { id: 3, name: "bottom", link: "/" },
];

const NavBar = (props: NavBarProps) => {
  return (
    <div className=" bg-transparent text-xl text-primary font-bold">
      <div className="w-full h-40 container flex items-center">
        <div className="flex gap-2 basis-1/3 items-center justify-center">
          {leftMenus.map((leftItems, leftIdx) => {
            return (
              <p
                className="h-10 w-28 cursor-pointer"
                key={leftIdx + "_" + leftItems.id}
              >
                {leftItems.name}
              </p>
            );
          })}
        </div>
        <div className="basis-1/3 flex justify-center items-center cursor-pointer">
          <Image
            src={"/images/logos/logo.svg"}
            height={60}
            width={60}
            alt="logo"
          />
        </div>
        <div className="flex gap-2 basis-1/3 justify-end">
          {" "}
          <div className="flex gap-2 basis-1/3 items-center justify-center">
            {rightMenus.map((rightItems, rightIdx) => {
              return (
                <p
                  className="h-10 w-28 cursor-pointer"
                  key={rightIdx + "_" + rightItems.id}
                >
                  {rightItems.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
