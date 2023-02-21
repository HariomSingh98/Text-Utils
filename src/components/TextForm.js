
import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("");//to changew state of text


  const changeToUpper = ()=>{//function to change the text in uppercase
      if(text.replace(/\s+/g, '').length===0){
        props.provideAlert("Please Enter Text ","Failure");
        setText('');
        return ; 
      }
      let newText= text.toUpperCase();
      setText(newText);
      props.provideAlert("Change to UpperCase","Success");//giving the alert to every functionality
  }
  const changeToLower =()=>{//function to change the text in lowercase
    if(text.replace(/\s+/g, '').length===0){
      props.provideAlert("Please Enter Text ","Failure");
      setText('');

      return ; 
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.provideAlert("Change to LowerCase","Success");
  }
  const textChange = (event)=>{//to  set the textArea to the latest text 
    setText(event.target.value);
    
  }
  const copyText = ()=>{//copy the text int the textArea
    if(text.replace(/\s+/g, '').length===0){
      props.provideAlert("Please Enter Text ","Failure");
      setText('');

      return ; 
    }
   
    let copyText = text;

   // Copy the text inside the text field
     navigator.clipboard.writeText(copyText);
     props.provideAlert("Copy the text","Success");
  }
  const removeSpace = ()=>{//remove unneccessary spaces
    if(text.replace(/\s+/g, '').length===0){
      props.provideAlert("Please Enter Text ","Failure");
      setText('');

      return ; 
    }
    let updatedText = text.replace(/\s+/g, ' ').trim();
    setText(updatedText);
    props.provideAlert("Remove extra spaces","Success");
  }
  const resetText=()=>{
    if(text.replace(/\s+/g, '').length===0){
      props.provideAlert("Please Enter Text ","Failure");
      setText('');

      return ; 
    }
    setText('');
    props.provideAlert("Reset the text","Success");
  }

  return (
    <div  style={{color : props.mode==='light'?'black':'white'}} >
      <h1>{props.heading}</h1> 
      <div class="mb-3">
       <textarea className="form-control" value ={text} onChange ={textChange}
       style={{backgroundColor:props.mode==='light'?'white':'#212120',color : props.mode==='light'?'black':'white'}} id="textArea" rows="6" placeholder='Enter text here'></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-2' onClick={changeToUpper}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={changeToLower}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={copyText}>Copy Text</button>
      <button className='btn btn-primary mx-2 my-2' onClick={removeSpace}>Remove Extra Spaces</button>
      <button className='btn btn-primary mx-2 my-2' onClick={resetText}>Reset Text</button>
      
      <div className='my-3'>
        <h2>Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <h3>Preview</h3>

        <p>{text}</p>
      </div>
      
   </div>
  )
}
