import React, {useState} from 'react'

export default function TextArea(props) {
    const UpClick = ()=>{
        let upText=text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to UpperCase","success");
    }
    const OnChange = (event)=>{
        console.log("Button was Clicked.");
        setText(event.target.value)
    }
    const OnfChange = (event)=>{
        console.log("Button was Clicked.");
        findWord(event.target.value)
    }
    const OnrChange = (event)=>{
        console.log("Button was Clicked.");
        repWord(event.target.value)
    }
    const LowClick = ()=>{
        let LowText=text.toLowerCase();
        setText(LowText);
        props.showAlert("Converted to LowerCase","success");
    }
    const SpeakClick = ()=>{
        let voices = window.speechSynthesis.getVoices();
        let msg = new SpeechSynthesisUtterance();
        msg.voice = voices[1];
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Reciting the Text","success");
    }
    const CopyClick = ()=>{
        let text=document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to ClipBoard","success");
    }
    const xtraClick = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    const ClearClick = ()=>{
        let ClearText='';
        setText(ClearText);
        props.showAlert("Cleared the Text","success");
    }
    const RepClick = ()=>{
        let repText=text.replaceAll(fword,rword);
        setText(repText)
    }
    const [text, setText] = useState(''); 
    const [fword, findWord] = useState(''); 
    const [rword, repWord] = useState(''); 
  return (
    <>
    <div className="container">
        <h1 className="cont my-1">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" style={{backgroundColor: props.mode==='dark'?'#050331':'white',color: props.mode==='dark'?'white':'black'}} value={text} placeholder="Enter Your Text Here" onChange={OnChange} id="textBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={UpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={LowClick}>Convert to LOWERCASE</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={SpeakClick}>Recite</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={CopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={xtraClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={ClearClick}>Clear Text</button>
        <h2 className="header my-3">FIND & REPLACE</h2>
        <textarea className="form-control my-3" value={fword} placeholder="Enter Your Text Here" onChange={OnfChange} id="textBox" rows="2"></textarea>
        <textarea className="form-control" value={rword} placeholder="Enter Your Text Here" onChange={OnrChange} id="textBox" rows="2"></textarea>
        <button className="btn btn-dark my-3" onClick={RepClick}>Replace Word</button>

    </div>
    <div className="container my-3">
        <h3>TEXT SUMMARY</h3>
        <p>{text===""?"0":text.trim().split(/\s+/).length} Words AND {text.length} Characters</p>
        <p>{text===""?"0":text.trim().split(/\s+/).length*0.004} Minutes Required to Read</p>
        <h3>PREVIEW</h3>
        <p>{text.length>0?text:"Nothing to Preview.!"}</p>
    </div>
    </>
  )
}
