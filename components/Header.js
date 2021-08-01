import React , {useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import{ selectUserName, selectUserPhoto,setUserLogin,setSignOut} from "../features/user/userSlice";
import {useDispatch,useSelector} from "react-redux";
import {auth,provider} from "./firebase";
import {useHistory} from "react-router-dom";
import { Avatar } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MuseumIcon from '@material-ui/icons/Museum';
import "./Header.css";
function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
      const userName =useSelector(selectUserName);
      const userPhoto =useSelector(selectUserPhoto);

 useEffect(() => {                                             //other way
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                       name: user.displayName,
                       email: user.email,
                       photo: user.photoURL
                   }))
                   history.push("/home")
            }
        })
     }, []);       
      
    

        const signIn = () => {
                auth.signInWithPopup(provider)
                .then((result)=> {
                    let user = result.user
                    dispatch(setUserLogin({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    }))
                    history.push("./home")
                })
        }
          const signOut =() => {
              auth.signOut()
              .then(()=>{
                  dispatch(setSignOut())
                  history.push("./login")
              })
          }



    return (
        <Nav>
            <Link to='/'>
          <Logo src =" https://pngimg.com/uploads/polar_bear/polar_bear_PNG23.png "  />   
          </Link>
          {!userName ?(
              <LoginContainer>
                     <Login onClick={signIn}>Login</Login>
              </LoginContainer>
         ):
            <>
              <NavMenu>
               <Link to="/Home" className="navbar-item">
                  <HomeIcon fontSize="small" />
                   <span>HOME</span>
               </Link>
               <Link to="/About" className="navbar-item">
                    <InfoIcon fontSize="small" />
                   <span>ABOUT</span>
               </Link>
               <Link to="/Entrepreneur" className="navbar-item">
                    <EmojiPeopleIcon fontSize="small" />
                   <span>ENTREPRENEUR</span>
               </Link>
               <Link to="/Investor" className="navbar-item">
               <BusinessIcon fontSize="small" />
                   <span>INVESTOR</span>
               </Link>
               <Link to="/Mentors" className="navbar-item">
                  <MuseumIcon fontSize="small" />
                   <span>MENTORS</span>
               </Link>
               <Link to="/Register" className="navbar-item">
                <ContactsIcon fontSize="small" />
                   <span>Content Us</span>
               </Link>
           </NavMenu>
          
           <Avatar className="avatar" onClick={signOut}
          
           src={userPhoto} alt={userName} />
           
           <div className="username" >
               <h4>{userName} </h4>     {/*     //{userName.displayName}     */}
           </div>

            </>


          }
           
        </Nav>
    )
}

export default Header


const Nav = styled.div`
  height: 70px;
  background: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
   position: sticky;
   font-size: 1rem;
   z-index: 10;
   
  
`;

const Logo = styled.img`
  width: 80px;


`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  height:80px;
  z-index:1;
  width:100%;
  padding: 0 24px;
  max-width: 1100px;
  flex: 1;
  margin-left:25px;
  margin-right: 25px;
  align-items : center;
   @media screen and (max-width: 960px){
       transition: 0.8s all ease;
   }
  a {

    display: flex;
    align-items :center;
    padding: 0 12px;
    cursor : pointer;
    img {
        height: 20px;

    }

    Link{
        background:white;
    }


    span{
        color:white;
        font-size : 17px;
        letter-spacing: 1.42px;
        position:relative;
        
        &:after {
            content :"";
            height: 2px;
            background: white;
            position:absolute;
            left: 0;
            right:0;
            bottom: -6px;
            opacity:0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }

  }

`;


const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover{
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
  }


`;

const LoginContainer = styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;


`;
