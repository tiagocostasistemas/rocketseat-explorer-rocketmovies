import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;/*ocupar o máximo de espaço*/
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  > p {
      display: flex;
      text-align: start;
      color: ${({ theme }) => theme.COLORS.GREY_300};
      
    }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    background-color: ${({ theme }) => theme.COLORS.GREY_600};
  }
`


