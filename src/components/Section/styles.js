import styled from 'styled-components'

export const Container = styled.section`
  
  margin: 0 auto;
  margin-top: 40px;

  h2 {
    display: inline;

    color: ${({ theme }) => theme.COLORS.GREY_300};
    font-size: 36px;

    margin-right: 610px;
    margin-left: 115px;
  }
`