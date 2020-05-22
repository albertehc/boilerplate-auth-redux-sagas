import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, config } from "react-spring";
import swal from "sweetalert";
import { useAuthContext } from "./../../context/auth/authContext";
import { setUserActionError } from "./../../context/auth/authActions";
import { logout } from "./../../api/auth.api.js";
import { Brand } from "./Brand";
import { BurgerMenu } from "./BurgerMenu";
import { CollapseMenu } from "./CollapseMenu";
import { LinkStyled } from './../Link/Link'
import {
  NavBar,
  FlexContainer,
  NavLinks,
  BurgerWrapper
} from "./Navbar.styles";

export const Navbar = React.memo(() => {
  const history = useHistory();
  const [{ logged }, dispatch] = useAuthContext();
  const [navbarState, setNavbarState] = useState(false);
  const handleNavbar = () => setNavbarState(!navbarState);
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });
  const handleLogout = () => {
    logout()
      .then(
        swal("Done!", `Log out success!`, "success", {
          span: false,
          timer: 2900,
        })
      )
      .then(dispatch(setUserActionError()))
      .then(history.push("/"));
  };
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <LinkStyled to={"/"}>
              <span>Home</span>
            </LinkStyled>
            {!logged && (
              <>
                <LinkStyled to={"/login"}>
                  <span>Login</span>
                </LinkStyled>
                <LinkStyled to={"/signup"}>
                  <span>Signup</span>
                </LinkStyled>
              </>
            )}
            {logged && (
              <>
                <LinkStyled to={"/edit"}>
                  <span>Edit</span>
                </LinkStyled>
                <span onClick={handleLogout}>Logout</span>
              </>
            )}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      {(navbarState) && <CollapseMenu handleLogout={handleLogout} navbarState={navbarState} handleNavbar={handleNavbar} />}
    </>
  );
});
