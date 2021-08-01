import React from 'react'
import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import Title from "./Title"
import Promo from './Promo'
import Story from './Story'
import Social from './Social'
function Home() {
    return (
        <Container>
            <ImgSlider />
            <Title />
            < Promo />
            <Story />         
            < Social />
        </Container>
    
    )

}

export default Home


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;
  &:before {
      background: url("/images/home-background.png") center center/ cover 
      no-repeat fixed;
      content: "";
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index: -1;
  }

`;