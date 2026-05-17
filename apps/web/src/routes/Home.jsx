import { useState } from "react";
import "../component_css/home.css"

function Home(){
    var output = document.querySelector(".out");
    var input = document.querySelector(".indata");
    var [num, setNum] = useState(0);
    
    function handled(event){
        var val = event.target.value;
        console.log(val);
        setNum(num+1);
    }

    

    return(
    <>
        <section className="hero conatiner-fluid  d-flex flex-column flex-2 ">
            <h1 className="container-fluid bg-warning d-flex flex-5 py-2 m-0">Welcome to Dashboard</h1>
            <div className="data container-fluid m-0 d-flex flex-wrap justify-content-evenly align-items-center h-100">

                <div className="box d-flex flex-5">Data 1</div>
                <div className="box d-flex flex-5">Data 2</div>
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