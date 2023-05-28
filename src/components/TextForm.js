import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const[text, setText] = useState("");

  return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>

        <div className="container">
            <h2>Preview</h2>
            <p> {text }</p>
        </div>
        </>
        
    )
}
