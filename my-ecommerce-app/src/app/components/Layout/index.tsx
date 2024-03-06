"use client";

import { ReactNode } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Container } from "./styles";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Container>
      <Header />
      <section>
        <NavBar />

        <main>{children}</main>
      </section>
    </Container>
  );
}
