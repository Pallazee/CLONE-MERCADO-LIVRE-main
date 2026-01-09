import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: var(--color-background);
`;

export const Wrapper = styled.main`
  flex: 1;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 24px 16px;
`;
