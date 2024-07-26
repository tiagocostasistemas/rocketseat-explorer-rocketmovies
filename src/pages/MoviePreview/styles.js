import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px;
  grid-template-areas: 
  "header"
  "content"
  ;
`

export const Content = styled.div`
  display: inline;
  
  width: 1160px;
  margin-top: 40px;
  margin-left: 100px;
  
  h2 {
    display: inline;
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  p {
    font-size: 16px;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  #text {
    margin-top: 40px;
  }

  #author {
    font-family: 'Roboto';
    margin-top: 24px;
    margin-bottom: 40px;
  }

  #clock {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-left: 8px;
    margin-right: 8px;
  }

  #stars {
    width: 140px;
    height: 20px;
    margin-left: 19px;
  }

  #button {
    position: absolute;
    margin-left: 1070px;
    width: 207px;
  }

  img {
    border-radius: 35px;
    width: 16px;

    margin-right: 8px;
  }

  .tags {
    display: flex;
  }
`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 200px;
  margin-right: 70px;

  background: #FF859B;
  border-radius: 8px;
`

