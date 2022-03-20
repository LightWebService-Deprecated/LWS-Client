import LwsButton from "./components/LwsButton";
import LwsInputField from "./components/LwsInputField";

function App() {
    return (
        <div>
            <LwsButton title="Hello, World Button!"/>
            <LwsInputField
                inputDescription="Email"
                inputPlaceHolder="Enter Email Address"
                inputName="userEmail"
                inputType="email"
            />
        </div>
    );
}

export default App;
