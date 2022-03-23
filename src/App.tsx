import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import CreateUbuntuInstancePage from "./pages/CreateUbuntuInstancePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/example" element={<TestPage/>}/>
                <Route path="/account/login" element={<LoginPage/>}/>
                <Route path="/account/register" element={<RegisterPage/>}/>
                <Route path="/instance/ubuntu" element={<CreateUbuntuInstancePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
