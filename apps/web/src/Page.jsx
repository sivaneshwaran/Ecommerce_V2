import Side_bar from './component/Side_bar.jsx'
import Home from './routes/Home.jsx'
import User from "./routes/User.jsx"
import Achievement from './routes/Achievement.jsx'
import Service from "./routes/Service.jsx"
import Contact from "./routes/Contact.jsx"
import Error from "./routes/Error.jsx"
import Users from "./routes/Users.jsx"
import Login from "./routes/Login.jsx"
import Signup from "./routes/Signup.jsx"
import "./component_css/layout.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from './routes/ProtectedRoute.jsx'

function Page(){
    return(
            <div className="page d-flex justify-content-center">
                <Side_bar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/user" element={<User />}/>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/achievement" element={<Achievement />}/>
                    </Route>
                    <Route path="/service" element={<Service />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/users/:username" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>


    )
}
export default Page;