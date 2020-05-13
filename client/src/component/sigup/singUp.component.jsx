import React ,{useState}from 'react';
import {connect} from 'react-redux'

import {signUpStart} from '../../redux/user/user.actions';
import InputForm from './../form-input/form-input.component';
import ButtonSub  from './../button/button.component';

import './signUp.styles.scss'
export const SignUp= ({signUpStart,})=>{
    const [userCredentials, setuserCredentials] = useState({ displayName:'',
    email:'',
    password:'',
    confirmPassword:''})
    const {email,displayName,password,confirmPassword}=userCredentials
  const  handleSubmit= event=>{
        
        event.preventDefault();
        
        
    if(password !==confirmPassword){
        alert("password dont't match");
        return;
    }
    signUpStart({email,password,displayName})
    
    }

    const handleChange=event=>{
        const{name,value}=event.target;
        setuserCredentials({...userCredentials,[name]:value})
    }
   
        
        return(
            <div className="sign-up">
                <h1 className="title">I don't have an a account</h1>
                <span>SignUp with email and password</span>
                <form  onSubmit={handleSubmit}>
                <InputForm 
                type="text"
                value={displayName}
                name="displayName"
                onChange={handleChange}
                lable='Display Name'
                required

                />
                <InputForm 
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                lable='Email'
                required

                />
                <InputForm 
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                lable='Password'
                required

                />
                <InputForm 
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                lable='Confirm Password'
                required

                />
                <ButtonSub type="submit">Sign Up</ButtonSub>
                </form>
            </div>
        )
    }

const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp)