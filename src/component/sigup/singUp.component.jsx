import React from 'react';
import {connect} from 'react-redux'

import {signUpStart} from '../../redux/user/user.actions';
import InputForm from './../form-input/form-input.component';
import ButtonSub  from './../button/button.component';

import './signUp.styles.scss'
export class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= event=>{
        
        event.preventDefault();
        const {signUpStart} =this.props
        const {email,displayName,password,confirmPassword}=this.state
    if(password !==confirmPassword){
        alert("password dont't match");
        return;
    }
    signUpStart({email,password,displayName})
    
    }

    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        
        const {email,displayName,password,confirmPassword}=this.state
        return(
            <div className="sign-up">
                <h1 className="title">I don't have an a account</h1>
                <span>SignUp with email and password</span>
                <form  onSubmit={this.handleSubmit}>
                <InputForm 
                type="text"
                value={displayName}
                name="displayName"
                onChange={this.handleChange}
                lable='Display Name'
                required

                />
                <InputForm 
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                lable='Email'
                required

                />
                <InputForm 
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                lable='Password'
                required

                />
                <InputForm 
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={this.handleChange}
                lable='Confirm Password'
                required

                />
                <ButtonSub type="submit">Sign Up</ButtonSub>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp)