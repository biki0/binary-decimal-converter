import React, {useState} from "react";
import "./style.css"


const DecBinConvert = (props) => {

    const searchValue = props.inputVal;

    //if invalid input (not numbers) set showError = true to show the error
    let invalidInput = false;

    if(searchValue.length > 0 && searchValue.match(/[^0-9]/)){
        invalidInput = true;
    }
    

    let x = -1;
    x = Number(searchValue).toString(2);
    let showResult = x >= 0;
    


    return (

        <div> 
            
            <h1 className="bin-dec-title">Decimal to Binary Converter</h1>
            {invalidInput && <div className="error-info">Invalid input! Enter numbers only</div>}
            {showResult && <div className="value">{x}</div>}

        </div>

    )
}


export default DecBinConvert;








