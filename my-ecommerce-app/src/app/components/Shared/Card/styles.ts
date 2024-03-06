"use client";

import styled from "styled-components";

export const ContainerMain = styled.div`
  position: relative;
  height: 100%;
`;

export const Container = styled.div`
  width: "100%";
  height: "100%";
  border-radius: "10px";
  background-size: "cover";
  background-position: "center";
`;

export const Card = styled.div`
  width: 500px;
  height: 280px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const Left = styled.div`
  position: "absolute";
  top: "50%";
  transform: "translate(0, -50%)";
  left: "32px";
  font-size: "45px";
  color: "#fff";
  z-index: 1;
  cursor: "pointer";
`;

export const Right = styled.div`
  position: "absolute";
  top: "50%";
  transform: "translate(0, -50%)";
  right: "32px";
  font-size: "45px";
  color: "#fff";
  z-index: 1;
  cursor: "pointer";
`;
