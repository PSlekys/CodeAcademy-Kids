import React from "react";
import * as S from "./Navigation.style";

const links = [
  {
    title: "Būreliai",
    url: "/",
  },
  {
    title: "Prisijungti",
    url: "/login",
  },
  {
    title: "Registracija",
    url: "/register",
  },
];

const Navigation = () => (
  <S.NavigationWrapper>
    <S.NavigationBlock>
      <S.Logo
        src="https://www.codeacademykids.com/wp-content/themes/codekids/images/cak.svg"
        alt=""
      />
      <S.LinksBlock>
        {links &&
          links.map((link) => (
            <S.StyledLink key={link.url} to={link.url}>
              {link.title}
            </S.StyledLink>
          ))}
      </S.LinksBlock>
    </S.NavigationBlock>
  </S.NavigationWrapper>
);

export default Navigation;
