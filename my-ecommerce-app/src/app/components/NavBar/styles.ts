"use client";

import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type ContainerProps = {
  isopen: "Y" | "N";
};

type ButtonLinkProps = {
  active: "Y" | "N";
  isopen: "Y" | "N";
} & LinkProps;

export const Container = styled.nav<ContainerProps>`
  width: ${(props) => (props.isopen === "Y" ? 15 : 5)}%;
  height: calc(100vh - 3rem);
  background-color: var(--background);
  padding: 0.75rem 1rem;
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const ButtonActionOpenClose = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--background);
  border: 1px solid var(--grey20);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey50);
  position: absolute;
  top: 3px;
  right: -10px;
`;

export const ButtonLink = styled(Link)<ButtonLinkProps>`
  width: 100%;
  padding: 0.75rem;
  background-color: var(
    ${(props) => (props.active === "Y" ? "--primary" : "--background")}
  );
  margin-bottom: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.isopen === "Y" ? "" : "center")};
  gap: 1rem;
  line-height: 1rem;
  font-size: var(--fSize4);
  font-weight: var(--semi);
  color: var(
    ${(props) => (props.active === "Y" ? "--activeButton" : "--primary")}
  );
  transition: all 0.5s ease-out;

  &:hover {
    background-color: var(
      ${(props) => (props.active === "Y" ? "--primary" : "--secondary")}
    );
    color: var(
      ${(props) => (props.active === "Y" ? "--activeButton" : "--primary50")}
    );
  }

  span {
    display: ${(props) => (props.isopen === "Y" ? "block" : "none")};
  }
`;
