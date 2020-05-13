import React, {useState} from 'react';
import './sign-in.styles.scss';
import InputForm from './../../component/form-input/form-input.component';
import ButtonSub from './../../component/button/button.component';
//import {signInWithGoogle, auth} from '../../firebase/firebase.utilits';
import {GoogleSignInStart,emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux'



export const SignIn=({GoogleSignInStart,emailSignInStart})=> {

   const [userCredentilas, setuserCredentilas] = useState({  email:'',
   password:''})

   const {email,password}=userCredentilas;

    const handleSubmit=async event=>{
        event.preventDefault();
        
        emailSignInStart(email,password)
        
        
    }
    
  const  handlechange=event=>{
        const {value,name}=event.target;
        setuserCredentilas({...userCredentilas,[name]:value})
    }
    
        

        return(

            <div className="sign-in">
                <h1>Already have account SignIn</h1>
                <span className="title">Signin here with email and password</span>
                <form onSubmit={handleSubmit}>
                    <InputForm type="email" name="email" value={email} required
                    handleChange={handlechange}
              lable="email"
            
                    />
                    
                    
                    {/* <label>Email</label> */}

                    <InputForm type="password" name="password" value={password} 
                    handleChange={handlechange}
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


const mapDispatchToprops=dispatch=>({
    GoogleSignInStart:()=>dispatch(GoogleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToprops)(SignIn)