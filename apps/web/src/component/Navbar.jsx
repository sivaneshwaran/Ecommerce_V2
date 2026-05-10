import "../component_css/navbar.css"
import "../component_css/layout.css"

function Navbar(){
    return (    
    <header className="navbar container-fluid row d-flex justify-content-center align-items-center m-0 p-0">
        <div className="brand col-lg-6 d-flex flex-4">React Pro</div>
        <div className="buttons col-lg-6 d-flex flex-5">
            <button className="nav-btn ">Home</button>
            <button className="nav-btn ">Products</button>
            <button className="nav-btn ">Services</button>
            <button className="nav-btn ">Achievement</button>
            <button className="nav-btn ">Contact</button>
        </div>
    </header>
    )

}

export default Navbar;