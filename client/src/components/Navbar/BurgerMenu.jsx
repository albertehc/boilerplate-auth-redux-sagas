import React from 'react';
import { Wrapper } from "./BurgerMenu.styles";

export const BurgerMenu = React.memo(({ handleNavbar, navbarState }) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
});