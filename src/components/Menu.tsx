import { FC, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import hamburgerSvg from "../assets/hamburger.svg";
interface MenuProps {}
const MenuBtn = styled.button``;
const MenuOptions = styled.section`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 15rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 0.5rem;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease-out;
`;
const Option = styled.button`
  width: 100%;
  background-color: white;
  padding: 1rem;
  font-size: 1rem;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const Menu: FC<MenuProps> = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!menu.current) {
      return;
    }
    menu.current.style.opacity = isMenuActive ? "1" : "0";
  }, [isMenuActive]);
  function toogleMenu() {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <div style={{ position: "relative" }}>
      <MenuBtn onClick={toogleMenu}>
        <img src={hamburgerSvg} alt="menu" />
      </MenuBtn>
      <MenuOptions ref={menu}>
        <Option>Nuevo grupo</Option>
        <Option>Todos los usuarios</Option>
        <Option>Todos los grupos</Option>
      </MenuOptions>
    </div>
  );
};

export default Menu;
