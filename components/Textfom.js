import React,{useState} from 'react'

export default function Textfom(props) {
  const handCase=()=>{
    
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Text has changed to upperCase","success")
  }
  const handloCase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Text has changed to lowerCase","success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const clearhand=()=>{
    
    let newtext="";
    setText(newtext);
    props.showalert("Text deleted","success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const Removextraspace = () => {
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "));
    props.showalert("Text has removes extra space","success")
  }

  const copytext = () => {
    
    navigator.clipboard.writeText(text);
    
    props.showalert("Text has copied","success")
    
  }
  const firstletcapital = () =>{
    let lowerCase=text.toLocaleLowerCase();
    let word=lowerCase.split(" ");
    let newword=word.map((word)=>{
      return word.at(0).toUpperCase()+word.split(" ");
    })
    let newtext=newword.join(" ");
    setText(newtext);
    props.showalert("First letter capitalized","success")
  
  }
  const colorhand=()=>{
    let body=document.querySelector("body")
    body.style.background=randomcolor()
  }
  const randomcolor=()=>{
    let letter="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
      color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
  }
  
  
  
  const [text, setText] = useState("");
  
  
  return (
    
    <div style={{color:props.mode==="light"?"black":"white"}}>

   <>   
<h1>{props.heading}</h1>
<textarea className="form-control my-4" style={{background:props.mode==="light"?"white":"#042743",color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" ></textarea>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={handCase}>Change to upperCase</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={handloCase}>Change to lowerCase</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={firstletcapital}>Capital first letter</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={speak}>speak messeage</button>

<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={Removextraspace}>Remaove extra space</button>

<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={copytext}>Copytext</button>

<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={clearhand}>Clear text</button>

<button disabled={text.length===0} className='btn btn-primary my-3 mx-3'onClick={colorhand}>Get random background color</button>

<div className="container" >
 <h2>Your text summary is here.. </h2>
<h4> <b>Words is {text.split(/\s/).filter((element)=>{return element.length!==0}).length } Character is {text.length} </b></h4> 
</div>  
<h4 className='my-4'> <b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read...</b></h4>  
<h3>Priview</h3> 
<p>{text.length>0?text:"Nothing to priview"}</p>



</>
 
    </div>
  )
}
