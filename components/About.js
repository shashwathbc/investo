import React from 'react'
import styled from "styled-components"
function About() {
	return (
		<Container>
		<h1>                ABOUT US                </h1> 
		<h2>
Our mission

Reshaping the world to suit the needs of self employed professionals and their teams
<br></br>
In India there are so many people out there with their innovative ideas for starting a small business. But because of their financial constraints they fail to execute their idea . 
Considering that in our mind we are here developing a website called "INVESTO" in which people can start their own business by finding intrested investors for their project.
<br></br>
In our website we are providing the following services:
<br></br>
1.Investors can invest their money according to their intrest, they can invest in whichever project they are interested.
<br></br>
2.Entrepreneurs can upload their business ideas, business location and the  investment required by them to start the business.Thus finding the entrepreneurs and investors will be made easy by using our website.
<br></br>
3.Mentors this section will provide experienced entrepreneurs who can help or guide nascent entrepreneur.
</h2>
	     </Container>
	)
}

export default About

const Container = styled.div`

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