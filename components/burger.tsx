import { useState } from "react";
import Navlist from "./navList";
import styled from "styled-components";
import styles from '../styles/navBar.module.css';


interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  display: none !important;
  cursor: pointer;

  div {
    width: 25px;
    height: 2.8px;
    background: #fff;
    margin: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-500%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (max-width: 760px) {
    display: block !important;
    position: fixed;
    right: 21px;
    z-index: 21;
  }
`;

const Burger = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navlist open={open} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
      </StyledBurger>
    </>
  );
};
export default Burger;