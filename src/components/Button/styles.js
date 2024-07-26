import styled from "styled-components";

export const Container = styled.button`
  grid-area: button;

  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;

  &:disabled {
    opacity: 0.5;
  }
`