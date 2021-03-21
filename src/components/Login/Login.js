import React, { useContext, useState } from 'react';
import './Login.css';
import fbLogo from '../../Icon/fb.png';
import googleLogo from '../../Icon/google.png';
import { createUserWithEmailAndPassword,signInWithEmailandPassword, googleSignInPopup, fbSignInPopup, initializeLogin} from './LoginManager';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



initializeLogin();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [error, setError] = useState();
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: ''
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        if(newUser){
            
            if(user.email && user.password === user.confirmPassword){
                createUserWithEmailAndPassword(`${user.firstname} ${user.lastname}`, user.email, user.password)
                .then(res =>{
                    const newUser = {
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        message: ''
                    }
                    newUser.message = res.message;
                    setUser(newUser);
                })
            }
            else{
                const newUser = {...user};
                newUser.message = 'password not matched';
                setUser(newUser);
            }
        }
        if(!newUser && user.email && user.password){
            signInWithEmailandPassword(user.email, user.password)
            .then(res =>{
                handleResponse(res, true);
            })
        }
      
    }
    const googleSignIn = ()=>{
        googleSignInPopup()
        .then(res =>{
            handleResponse(res, true);
        })
    }
    const fbSignIn = ()=>{
         fbSignInPopup()
        .then(res =>{
            handleResponse(res, true);
        })
    }
    const handleBlur = (e) =>{
        let isValid = true;
        if(e.target.name === 'email'){
          isValid = /\S+@\S+\.\S+/.test(e.target.value); 
          if(isValid){
          setError('')
          }
          else{
              setError('Wrong Email')
          }
        } 
        if(e.target.name === 'password'){
          const isPassValid = e.target.value.length > 6;
          const passHasNumber = /\d{1}/.test(e.target.value);
          isValid = isPassValid && passHasNumber;
          if(isValid){
              setError('');
          }
          else{
            setError('Password is wrong. Please fill up with minimum 7 alphabates with minimun one number')
          }
        }
        if(isValid){
           const newUser = {...user};
           newUser[e.target.name] = e.target.value;
           setUser(newUser);
        }
      }
      const handleResponse = (res, redirect)=>{
          setUser(res);
          setLoggedInUser(res);
          if(redirect){
            history.replace(from);
          }
          
      }
    return (
        <section>
            <div className="login-page mt-5">
            <div className="container">
                <div className="row">
            <div className="col-md-6 col-sm-12 mx-auto form-design align-self-center">
                {
                    newUser ? <h4>Create an account</h4> :
                    <h4>Login</h4>
                }
       
            <form onSubmit={handleSubmit}>
                {
                    newUser && <input className="login-input " type="text" name="firstname" onBlur={handleBlur} placeholder="First Name" required/>
                }
                <br/>
                {
                     newUser && <input className="login-input" type="text" name="lastname" onBlur={handleBlur} placeholder="Last Name" required/>
                }
                <br/>
                <input className="login-input" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} type="email" name="email" onBlur={handleBlur} placeholder="Username or Email" required/><br/>
                <input className="login-input" value={user.password}  onChange={(e)=> setUser({...user, password: e.target.value})} type="password" name="password" onBlur={handleBlur} placeholder="Password" required/><br/>
                {
                    newUser && <input className="login-input" type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" required/>
                }
                <br/>
                <input className="ml-2 submit-btn" type="submit" value={newUser ? "Create an account" : "Login"}/>
            </form>
               {
                newUser ? <p>Already have an account? <button onClick={() => setNewUser(!newUser)} style={{border: 'none', color:'#F9A51A', backgroundColor: 'white'}}>Login</button> </p> :
                <p>Don’t have an account? <button onClick={() =>setNewUser(!newUser)} style={{border: 'none', color:'#F9A51A', backgroundColor: 'white'}}>Create an account</button></p>
               
               }
            
                <p style={{color:'red'}}>{error}</p>
                <p style={{color:'red'}}>{user.message}</p>
               </div>
            
            
                <div className="p-5 d-grid" >
                    <h5 className="text-center lead mb-3">Or</h5>
                    <button onClick={fbSignIn} className="fb-google-login mb-3 d-block"><img style={{width: '37px', marginRight: '18px'}} src={fbLogo} alt="fb-logo"/>Continue with Facebook</button><br/>
                    <button onClick={googleSignIn} className="fb-google-login  d-block"><img style={{width: '31px', marginRight: '18px'}} src={googleLogo} alt="google-logo"/>Continue with Google</button>
                </div>
                </div>
                </div>
                </div>  
        </section>
    );
};

export default Login;