
import React from 'react'
import styled from 'styled-components';
function Profiles() {
	return (
		<Container>
			<h1>profiles</h1>
		</Container>
	)
}

export default Profiles


const Container = styled.div`
text-align:center;
position: absolute;
left: 50%;
top: 165%;
transform: translate(-50%, -50%);
font-family: cursive;
user-select: none;
h1{
     text-align:center;
     font-size: 60px;
}
  }

`;