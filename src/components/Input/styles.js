import styled from 'styled-components'

export const Container = styled.div`
  grid-area: input;
  width: 100%;
  display: flex;
  
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GREY_200};

  margin-bottom: 8px;
  border-radius: 10px;

  padding-left: 12px;

  > input {
    height: 55px;
    width: 100%;

    padding: 18px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`