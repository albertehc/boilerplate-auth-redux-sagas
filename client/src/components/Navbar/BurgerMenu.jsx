import React from "react";
import Wrapper from "./BurgerMenu.styles";

export default React.memo(({ handleNavbar, navbarState }) => (
  <Wrapper onClick={handleNavbar}>
    <div className={navbarState ? "open" : ""}>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </Wrapper>
));
