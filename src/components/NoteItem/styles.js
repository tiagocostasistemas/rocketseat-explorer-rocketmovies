import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  /* verifica se é novo para definir a cor de fundo */
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GREY_200}` : "none"};
  
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
   height: 56px;
   width: 180px;

   padding: 12px;

   border: none;
   background: transparent;
   color: ${({ theme }) => theme.COLORS.WHITE};

   &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
   }
  }
`