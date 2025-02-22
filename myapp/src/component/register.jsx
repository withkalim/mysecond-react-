import { useNavigate } from "react-router-dom";

function Register(){
    let takeNav = useNavigate();

    return (
        <div>
            <h1>Register here</h1>
            <button onClick={()=> takeNav("/login")} className="btn">Back to Login</button>
            <button onClick={()=> takeNav("/")} className="btn">Back to Home</button>
        </div>
    )
}
export default Register;