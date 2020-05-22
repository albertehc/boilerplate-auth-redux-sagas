import styled from "styled-components";
import { animated } from "react-spring";

export const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & p {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    display: block;
    &:hover {
      display: inline-block;
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
  @media (min-width: 769px) {
    
    display: none;
  }
`;