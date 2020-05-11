import React from 'react';
import './sign-in.styles.scss';
import InputForm from './../../component/form-input/form-input.component';
import ButtonSub from './../../component/button/button.component';
//import {signInWithGoogle, auth} from '../../firebase/firebase.utilits';
import {GoogleSignInStart,emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux'


export class SignIn extends React.Component{

    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
       
        
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {emailSignInStart}=this.props
        const {email,password}=this.state;
        emailSignInStart(email,password)
        
        
    }
    
    handlechange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {GoogleSignInStart}=this.props

        return(

            <div className="sign-in">
                <h1>Already have account SignIn</h1>
                <span className="title">Signin here with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputForm type="email" name="email" value={this.state.email} required
                    handleChange={this.handlechange}
              lable="email"
            
                    />
                    
                    
                    {/* <label>Email</label> */}

                    <InputForm type="password" name="password" value={this.state.password} 
                    handleChange={this.handlechange}
                    lable="password"
                    required/>
                    {/* <label>password</label> */}
                    <div className="button">
                        <ButtonSub type="submit" >SignIn</ButtonSub>
                    <ButtonSub type="button" onClick={GoogleSignInStart} GoogleSignin >
                        {''}
                        Signin  with Google{''}
                        </ButtonSub>
                    </div>
                    

                </form>
                
            </div>
        )
    }
}

const mapDispatchToprops=dispatch=>({
    GoogleSignInStart:()=>dispatch(GoogleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToprops)(SignIn)