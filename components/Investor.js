import React from 'react'
import styled from "styled-components";
import Icontent from "./Icontent";
import Ititle from "./Ititle";
function Investor() {
	return (
		<Container>
		<Ititle />
		< Icontent />
	     </Container>
	
	)
}

export default Investor
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
`;
