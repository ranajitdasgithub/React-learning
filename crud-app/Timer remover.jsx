
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setInputText(inputValue);

    if (inputValue.length > 0) {
      const newTypingTimeout = setTimeout(() => {
        console.log("timeout ran");
      }, 2000);
      setTypingTimeout(newTypingTimeout);
      //console.log("newTypingTimeout", newTypingTimeout);
    }
  };
  console.log(window.innerHeight, window.innerWidth);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={(e) => handleInputChange(e)} placeholder="Enter Text" />
    </div>
  );
}
