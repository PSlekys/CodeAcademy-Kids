import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import * as S from "./Navigation.style";

import { signOut } from "../../services/firebase/auth.controller";

const links = [
  {
    title: "Būreliai",
    url: "/",
    requiresAuth: false,
    requiresAnon: false,
  },
  {
    title: "Prisijungti",
    url: "/login",
    requiresAuth: false,
    requiresAnon: true,
  },
];

const Navigation = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext.auth);

  return (
    <S.NavigationWrapper>
      <S.NavigationBlock>
        <Link to="/">
          <S.Logo
            src="https://www.codeacademykids.com/wp-content/themes/codekids/images/cak.svg"
            alt=""
          />
        </Link>
        <S.LinksBlock>
          {links &&
            links
              .filter((x) => !x.requiresAuth && !x.requiresAnon)
              .map((link) => (
                <S.StyledLink key={link.url} to={link.url}>
                  {link.title}
                </S.StyledLink>
              ))}

          {!authContext.auth &&
            links &&
            links
              .filter((x) => x.requiresAnon)
              .map((link) => (
                <S.StyledLink key={link.url} to={link.url}>
                  {link.title}
                </S.StyledLink>
              ))}

          {authContext.auth &&
            links &&
            links
              .filter((x) => x.requiresAuth)
              .map((link) => (
                <S.StyledLink key={link.url} to={link.url}>
                  {link.title}
                </S.StyledLink>
              ))}

          {authContext.auth && (
            <span className="button is-secondary" handleClick={() => signOut()}>
              Atsijungti
            </span>
          )}
        </S.LinksBlock>
      </S.NavigationBlock>
    </S.NavigationWrapper>
  );
};

export default Navigation;
