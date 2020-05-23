import React from "react";
import { useSpring } from "react-spring";
import { CollapseWrapper, NavLinksWrapper } from "./CollapseMenu.styles";
import NavLinks from "./NavLinks";

export default React.memo(
  ({ closeCollapseMenu, handleLogout, navbarState }) => {
    const { open } = useSpring({ open: navbarState ? 0 : 1 });
    if (!navbarState) return null;
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
        <NavLinksWrapper>
          <NavLinks
            closeCollapseMenu={closeCollapseMenu}
            handleLogout={handleLogout}
          />
        </NavLinksWrapper>
      </CollapseWrapper>
    );
  }
);
