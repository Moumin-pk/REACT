import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook 
  const PasswordRef = useRef(null)


  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += '!@#$%^&*()_+-={}[]|:;"';

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length * 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  
  }, [Length, numberAllowed, characterAllowed,setpassword]);

  const copypaswordtoclipboard = useCallback(
    () => {
      PasswordRef.current?.select()  
    },
    [password],
  )
  
  useEffect(() => {
    passwordGenerater()
  }, [Length, numberAllowed, characterAllowed, passwordGenerater])
 
  return (
    <div className="box">
      <div className="card">
        <h1>Password Generater</h1>
        <div className="inp-btn">
          <input
            type="text"
            placeholder="password"
            readOnly
            value={password} ref={PasswordRef}/>

          <button  onClick={copypaswordtoclipboard} >COPY</button>
        </div>

        <div className="card-section">
          <div className="slider-container">
            <input
              type="range"
              min="6"
              max="25"
              value={Length}
              class="slider"
              onChange={(elem) => {
                setLength(elem.target.value);
              }}
            />
            <label id="length">Length:{Length}</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="numberCheckbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              id="characterCheckbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
