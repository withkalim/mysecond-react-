import { useNavigate } from "react-router-dom";

function Home(){
    let takeNav = useNavigate();

    return (
        <div>
            <h1>it's home page:)</h1>
            <button  onClick={()=> takeNav("/login")} className="btn">Login</button>
            <button onClick={()=> takeNav("/register")} className="btn" >Register</button>
        </div>
    )
}
export default Home;