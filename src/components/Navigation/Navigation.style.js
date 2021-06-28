import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationWrapper = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoint}) {
    & {
      max-width: ${(props) => props.theme.breakpoint};
      margin: 0 auto;
    }
  }
`;

export const NavigationBlock = styled.header`
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;

  @media screen and (min-width: ${(props) => props.theme.breakpoint}) {
    & {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const LinksBlock = styled.nav`
  margin-top: 0.5rem;
`;

export const StyledLink = styled(Link)`
  color: #868686;
  display: block;
  font-size: 0.8rem;
  padding: 0.2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    color: black;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint}) {
    & {
      display: inline;
      padding: 0 0.5rem;
    }
  }
`;
