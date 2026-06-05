import { useEffect, useState } from "react";
import "../component_css/home.css";
import * as jose from "jose";
import { isLog } from '../slice/UserSlice';
import { useDispatch } from "react-redux";

function Home(){
    var output = document.querySelector(".out");
    var input = document.querySelector(".indata");

    const secretKey = new TextEncoder().encode("Sivaneshwaran_key_JWT_also_have_length");
    const isLogged = false;
    const dispatch = useDispatch();

    const [jokes, setJokes] = useState({
        setup: "",
        punchline: "",
    });

    const handleClick = async ()=>{
        try{
            const res = await fetch('https://official-joke-api.appspot.com/jokes/random/1');
            const joke = await res.json();

            setJokes( prestate =>   ({
                ...prestate,
                setup: joke[0].setup,
                punchline: joke[0].punchline
            }));
        }catch(error){
            console.log("Error on Fetch Jokes\n"+ error);
        }
    }

    const getCookies = ()=>{
        const cookie = document.cookie;
        const payload = cookie.split(";")
        .find(data => data.startsWith("acc_t="))
        ?.split("=")[1];
        return cookie;
    }

    const getToken = ()=>{
        const cookie = document.cookie;
        const token = cookie.split(";")
        .find(data => data.startsWith("acc_t="))
        ?.split("=")[1];
        // console.log(token);
        return token;
    }

    // const verifyToken = async (token, secret)=>{
    //   try{
    //     const {payload, protectedHeader} = await jose.jwtVerify(token, secret,{
    //         issuer: 'test.com',
    //         audience: 'test.com',
    //     });
    //     // console.log("data",payload, protectedHeader);
    //     return payload;
    //   } catch(error){
    //     console.log("Verification Failed: ", error);
    //     return null;
    //   } 
    // }

    useEffect(()=>{
        const token = getToken();
        if(!token){
            console.log("Not Logged In");
            return;
        }else{
            const payload = jose.decodeJwt(token);
            if(!payload){
                console.log("not Logged In");
                return;
            }else{
            // console.log("payload",payload); 
            dispatch(isLog());
        }
        }


        
    },[])
    

    return(
    <>
        <section className="hero conatiner-fluid  d-flex flex-column flex-2 ">
            <h1 className="container-fluid bg-warning d-flex flex-5 py-2 m-0">Welcome to Dashboard</h1>
            <div className="data container-fluid m-0 d-flex flex-wrap justify-content-evenly align-items-center h-100">
    
                <div className="box d-flex flex-5 flex-column">
                    <p>{jokes.setup}</p>
                    <p>{jokes.punchline}</p>
                    </div>
                <div className="box d-flex flex-5"><button className="btn btn-success" onClick={handleClick}>Joke referesh</button></div>
                <div className="box d-flex flex-5">Data 3</div>
                <div className="box d-flex flex-5">Data 4</div>
                <div className="box d-flex flex-5">Data 5</div>
                <div className="box d-flex flex-5">Data 6</div>
                <div className="box d-flex flex-5">Data 7</div>
                <div className="box d-flex flex-5">Data 8</div>
                <div className="box d-flex flex-5">Data 9</div>
            </div>
        </section>
        <section>
            
        </section>
    </>

    )
}


export default Home;