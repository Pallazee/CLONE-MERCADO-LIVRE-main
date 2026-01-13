import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 52px;
    height: 52px;
    padding: 4px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &.active {
      border-color: var(--color-blue);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const Preview = styled.div`
  width: 480px;
  height: 480px;
  overflow: hidden;
  cursor: zoom-in;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.2s ease;
  }
`;
