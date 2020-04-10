import React from 'react';
import './sign-in.styles.scss';
import InputForm from './../../component/form-input/form-input.component';
import ButtonSub from './../../component/button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utilits'


export class SignIn extends React.Component{

    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
       
        
    }
    handleSubmit= event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    
    handlechange=event=>{
        const {value,name}=event.target;
        this.setState({[value]:name})
    }
    render(){

        return(

            <div className="sign-in">
                <h1>Already have account SignIn</h1>
                <span>Signin here with email and password</span>
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
                    <ButtonSub type="submit" >SignIn</ButtonSub>
                    <ButtonSub onClick={signInWithGoogle} >
                        {''}
                        Signin  with Google{''}
                        </ButtonSub>

                </form>
                
            </div>
        )
    }
}
export default SignIn