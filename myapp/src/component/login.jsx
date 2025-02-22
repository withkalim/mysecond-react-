import { useNavigate } from "react-router-dom";

function Login(){
    let takeNav = useNavigate();

    return (
        <div>
            <h1>Please Login </h1>
            <button onClick={()=> takeNav("/")} className="btn">Back to Home</button>
            <button onClick={()=> takeNav("/register")} className="btn">Go to Register</button>
        </div>
    )
}
export default Login;