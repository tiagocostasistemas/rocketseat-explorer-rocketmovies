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
  
  width: 84%;
  margin-top: 40px;
  margin-left: 110px;

  #title {
    font-size: 32px;
  }

  #tags {
    display: flex;
    margin-left: 0px;
    margin-top: 0px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GREY_300};
  }

  h3 {
    font-size: 20px;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    margin-top: 40px;
    margin-bottom: 24px;
  }

  .inputs {
    display: flex;
    gap: 40px;

    margin-block: 40px;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 88px;

    margin-top: 24px;
    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  #btn-delete-movie {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 40px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 93px;
  }
`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 200px;
  margin-right: 90px;

  background: #FF859B;
  border-radius: 8px;
`

