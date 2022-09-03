import React, {useState} from "react";
import BinDecConvert from "./BinDecConvert"
import DecBinConvert from "./DecBinConvert";
import "./style.css"

const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    }

    const buttonClicked = () => {
        setIsClicked(!isClicked);
    }

    return (

        <div>
        
            <input type="text" value={searchValue} onChange={handleInput} />

            {!isClicked && <BinDecConvert inputVal={searchValue} />}
            {isClicked && <DecBinConvert inputVal={searchValue} />}

            <button className="change-button" onClick={buttonClicked}>Decimal to Binary</button>

        </div>

    )        
}

export default App;


