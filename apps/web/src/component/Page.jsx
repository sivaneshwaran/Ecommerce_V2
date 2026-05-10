import Side_bar from './Side_bar.jsx'
import Home from './Home.jsx'
import "../component_css/layout.css"

function Page(){
    return(
        <div className="page d-flex justify-content-center">
            <Side_bar />
            <Home />
        </div>
    )
}
export default Page;