import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
