import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<TestPage/>}/>
                <Route path="/account/login" element={<LoginPage/>}/>
                <Route path="/account/register" element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
