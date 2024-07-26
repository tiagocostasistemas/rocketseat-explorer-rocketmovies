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

  .head {
    display: flex;
    align-items: center;
    gap: 610px;

    margin-top: 20px;
    margin-bottom: 70px;
  }

  #button {
    width: 207px;
    margin-bottom: 37.62px;
    margin-left: 170px;
  }
 
  #title {
    margin-left: 90px;
    font-size: 32px;
  }

`

export const Links = styled.ul`
  list-style: none;
  width: 1160px;
  margin-left: 80px;
  margin-right: 90px;
  margin-top: -130px;

  display: flex;
  flex-direction: column;
  margin-bottom: 58.46px;

`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 270px;
  margin-right: 80px;

  background: #FF859B;
  border-radius: 8px;
`

