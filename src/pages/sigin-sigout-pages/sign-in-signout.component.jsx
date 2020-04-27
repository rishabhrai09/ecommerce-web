import React from 'react'
import './sign-in-signout.styles.scss'
import SignIn from '../../component/singin/sign-in.component'
import SignUp from '../../component/sigup/singUp.component'

const SignInSingnOut=()=>(
    <div className="signin-and-signup">
        <SignIn/>
    <SignUp/>
    </div>
    
)

export default SignInSingnOut