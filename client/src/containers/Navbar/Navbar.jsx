import React, { useState } from "react";
import useNavbarAnimation from "./../../hooks/useNavbarAnimation";
import C from "./../../components/Navbar";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import * as A from "./../../redux/auth/actions/auth.actions";

export default React.memo(() => {
  const dispatch = useDispatch();
  const [navbarState, setNavbarState] = useState(false);
  const handleNavbar = () => setNavbarState(!navbarState);
  const { barAnimation, linkAnimation } = useNavbarAnimation();

  const handleLogout = () => {
    dispatch(A.logoutRequest());
    closeCollapseMenu();
  };

  const closeCollapseMenu = () => {
    setNavbarState(false);
  };
  return (
    <>
      <S.NavBar style={barAnimation}>
        <S.FlexContainer>
          <C.Brand />
          <S.NavLinks style={linkAnimation}>
            <C.NavLinks
              closeCollapseMenu={closeCollapseMenu}
              handleLogout={handleLogout}
            />
          </S.NavLinks>
          <S.BurgerWrapper>
            <C.BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </S.BurgerWrapper>
        </S.FlexContainer>
      </S.NavBar>
      {navbarState && (
        <C.CollapseMenu
          closeCollapseMenu={closeCollapseMenu}
          handleLogout={handleLogout}
          navbarState={navbarState}
        />
      )}
    </>
  );
});
