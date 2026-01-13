import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 64px;

  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const Logo = styled.img`
  height: 190px; /* 🔥 tamanho REAL do ML */
  width: auto;
  display: block;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 14px;
    color: var(--color-black);
    text-decoration: none;

    &:hover {
      color: var(--color-blue);
    }
  }
`;
