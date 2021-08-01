import React from 'react'
import styled from "styled-components";
function Ititle() {
	return (
		<Container>
			<h2>INVESTORS</h2>
			<h3>HERE ARE SOME EXPERIANCED ENTROPRENOURS</h3>
		</Container>
	)
}

export default Ititle

const Container = styled.div`
text-align:center;
position: absolute;
left: 50%;
top: 8%;
transform: translate(-50%, -50%);
font-family: cursive;
user-select: none;
font-size:25px;
h1{
     text-align:center;
     font-size: 1000px;
}
  }

`; 