import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);

    & + a {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
    }
  }
`;

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;
`;

export const Column = styled.div`
  padding: 32px;

  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Section = styled.section`
  border-top: 1px solid var(--color-border);
  padding: 32px 0;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .title {
    font-size: 16px;
    color: var(--color-black);
  }

  .description {
    font-size: 14px;
    color: var(--color-gray);
    line-height: 19px;
  }

  > a {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

export const Description = styled.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--color-border);

  > h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    color: var(--color-gray);
    line-height: 24px;
  }
`;
