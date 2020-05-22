import React from "react";
import { useSpring } from "react-spring";
import { useAuthContext } from "./../../context/auth/authContext";
import { CollapseWrapper, NavLinks } from "./CollapseMenu.styles";
import { LinkStyled } from './../Link/Link'
export const CollapseMenu = React.memo(({ navbarState, handleNavbar, handleLogout }) => {
  const [{ logged }] = useAuthContext();
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <LinkStyled to={"/"} onClick={handleNavbar}>
            <p>Home</p>
          </LinkStyled>
          {!logged && (
            <>
              <LinkStyled to={"/login"} onClick={handleNavbar}>
                <p>Login</p>
              </LinkStyled>
              <LinkStyled to={"/signup"} onClick={handleNavbar}>
                <p>Signup</p>
              </LinkStyled>
            </>
          )}
          {logged && (
            <>
              <LinkStyled to={"/edit"} onClick={handleNavbar}>
                <p>Edit</p>
              </LinkStyled>
              <p onClick={handleLogout}>
                Logout
              </p>
            </>
          )}
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
});