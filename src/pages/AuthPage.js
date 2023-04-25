import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LogInForm"

function AuthPage({setUser}){
    // sign up
    return (
        <div>
            <h1>auth page</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </div>
    )
}


export default AuthPage