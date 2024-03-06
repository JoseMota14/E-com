import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: "Y" | "N";
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--shape);
`;

export const TabContainer = styled.div`
  height: 2.05rem;
  background-color: var(--primary50);
  display: flex;
`;

export const TabButton = styled.button<ButtonProps>`
  max-width: 20rem;
  height: 2.1rem;
  flex: 1;
  background-color: transparent;

  border-bottom: 3px solid
    var(${({ active }) => (active === "Y" ? "--primary100" : "--primary50")});
  border-top: 0px;
  border-left: 0px solid
    var(${({ active }) => (active === "Y" ? "--grey0" : "--shape")});
  border-right: 0px solid
    var(${({ active }) => (active === "Y" ? "--grey0" : "--shape")});
  cursor: pointer;
  outline: none;
  margin-top: -1px;
  position: relative;

  p {
    width: max-content;
    font-size: var(--fSize5);
    font-weight: var(
      ${({ active }) => (active === "Y" ? "--regular" : "--small")}
    );
    color: var(
      ${({ active }) => (active === "Y" ? "--primary100" : "--activeButton")}
    );
    margin: 0 auto;
  }

  span {
    display: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--transparent);
    font-size: var(--fSize6);
    font-weight: var(--semiBold);
    color: var(
      ${({ active }) => (active === "Y" ? "--primary100" : "--activeButton")}
    );
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 4px;
    top: 3px;

    &:hover {
      background-color: var(--transparent);
    }
  }

  &:hover {
    span {
      display: flex;
    }
  }
`;

export const TabContent = styled.div``;

export const WrapperLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${({ theme }) => theme.fonts?.fSize3}rem;
    font-weight: ${({ theme }) => theme.fonts?.regular};
    color: ${({ theme }) => theme.colors?.grey50};
    margin-top: 1rem;
  }
`;
