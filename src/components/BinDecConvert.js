import React, {useState} from "react";
import "./style.css"


const BinDecConvert = (props) => {

    const searchValue = props.inputVal;

    //if invalid input (not 0 or 1) set showError = true to show the error
    let invalidInput = false;
    for(let i in searchValue){
        if(searchValue.length > 0 && searchValue[i] !== "0" && searchValue[i] !== "1"){
            invalidInput = true;
        }
    }

    let x = -1;
    x = parseInt(searchValue, 2);
    let showResult = x >= 0;

    return (

        <div> 
            
            <h1 className="bin-dec-title"> Binary to Decimal Converter</h1>
            {invalidInput && <div className="error-info">Invalid input! Enter 0 or 1</div>}
            {showResult && <div className="value">{x}</div>}

        </div>
        
    )
}

export default BinDecConvert;

