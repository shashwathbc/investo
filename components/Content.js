import React from 'react'
import "./Content.css";
import styled from 'styled-components';
function Content() {
	return (
		<Container>
		<div className="content">
                  <div className="box">
			<div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  
			  </div>   
		    <div className="box">
			    <div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  
			    
			    
			    </div>   
		     <div className="box">
			     <div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  
			     </div>   
		      <div className="box">
			      <div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  </div>   
		       <div className="box"><div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  </div>   
		        <div className="box"><div className="info">
			 <h3>Shashwath</h3>	
 <p>   Location:-bhavani pet Pune.</p>
<p>
Experience:-I am Suresh. I am working as an mentor in Entrepreneurship Area.
 I am here for 6 years now. Lots of my work has been around teaching Entrepreneurship.
  So, this is where I have been involved in all these years to support and work with entrepreneurs.
  This is really a great experience working at INVESTO.</p>
<p>
Contact using below mentioned details.
Mail-id:- bhagavatula01@gmail.com
Mobile no:-8989063256
			 </p>
				
				</div>  
			  </div>   
			
		</div>
		</Container>
	)
}

export default Content


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;
   @media screen and (max-width: 960px){
       transition: 0.8s all ease;
   }
  p{
	  aligm-items:center;
	  position:relative;
	  max-width: 960px;
	  transition: 0.8s all ease;
  }
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