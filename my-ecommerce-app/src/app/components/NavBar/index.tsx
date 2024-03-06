"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LuAlignStartVertical,
  LuAperture,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { ButtonActionOpenClose, ButtonLink, Container } from "./styles";

export function NavBar() {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(true);
  const pathname = usePathname();

  const items = [
    { name: "Shop", icon: LuAlignStartVertical, path: "/" },
    { name: "Account", icon: LuAperture, path: "/Account" },
  ];

  const handleChangeVisibility = () => {
    console.log(isOpenNav);

    setIsOpenNav((prevState) => !prevState);
  };

  return (
    <Container isopen={isOpenNav === true ? "Y" : "N"}>
      <ul>
        <ButtonActionOpenClose onClick={handleChangeVisibility}>
          {isOpenNav ? (
            <LuChevronsLeft style={{ width: 15, height: 15 }} />
          ) : (
            <LuChevronsRight style={{ width: 15, height: 15 }} />
          )}
        </ButtonActionOpenClose>

        {items.map((item, index) => {
          const isCurrentPath = pathname === item.path ? "Y" : "N";

          return (
            <li key={index}>
              <ButtonLink
                active={isCurrentPath}
                isopen={isOpenNav === true ? "Y" : "N"}
                href={item.path}
              >
                <item.icon />

                <span>{item.name}</span>
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
