import './index.css'
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import {useState} from "react";
import Results from "./Components/Results.jsx";

function App() {

    const[userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleInputChange(inputIdentifier, newValue) {
        setUserInput(prevState =>
            ({
                ...prevState,
                [inputIdentifier]: +newValue
            })
        );
    }

    return (
      <>
          <Header />
          <UserInput userInput = { userInput } handleInputChange = {handleInputChange}/>
          <Results input = { userInput } />
      </>
    )
}

export default App
