import styled from "styled-components";

export const Container = styled.button`
  grid-area: buttonText;
  display: flex;
  gap: 8px;

  margin-bottom: 24px;

  height: 21px;

  background: none;
  border: none;

  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PINK};

`