import React from "react";
import { useSelector } from "react-redux";
import LinkStyled from "./../Link/Link";

export default ({ closeCollapseMenu, handleLogout }) => {
  const { logged } = useSelector((state) => state.auth);
  return (
    <>
      <LinkStyled to={"/"} onClick={closeCollapseMenu}>
        <span>Home</span>
      </LinkStyled>
      {logged ? (
        <>
          <LinkStyled to={"/edit"} onClick={closeCollapseMenu}>
            <span>Edit</span>
          </LinkStyled>
          <span onClick={handleLogout}>Logout</span>
        </>
      ) : (
        <>
          <LinkStyled to={"/login"} onClick={closeCollapseMenu}>
            <span>Login</span>
          </LinkStyled>
          <LinkStyled to={"/signup"} onClick={closeCollapseMenu}>
            <span>Signup</span>
          </LinkStyled>
        </>
      )}
    </>
  );
};
