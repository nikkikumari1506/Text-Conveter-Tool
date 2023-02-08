import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpClick = () =>{
      //console.log("UpperCase was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase", "Success")
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase", "Success")
}
const handleClearClick = () =>{

  let newText = '';
  setText(newText)
  props.showAlert("Cleared", "Success")
}
const handleRemoveSpaces = () =>{
let newText = text.replace(/\s+/g,' ');
setText(newText) 
props.showAlert("Removed the spaces", "Success")
}
const handleComma = () =>{
  
  let newText = text.replaceAll(" ", ", ");
  setText(newText)
  props.showAlert("Comma Added", "Succes")
}
const handleRemoveComma = () =>{
  
  let newText = text.replaceAll(", ", " ");
  setText(newText)
  props.showAlert("Comma Removed", "Success")
}
const handleSrchClick = () => {
  let str = prompt("enter the string you wanna search :");
  let newText = text.includes(str, 0);
  if (newText === true){
      setText("the string " + str + " is present..");
  }
  else{
      setText("the string " + str + " is not present..");
  }
  props.showAlert("Search operation completed", "Success")
}
const speak = () => {
 
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Voice", "Success")
}
const handleCopy = () => {
  var copyText = document.getElementById("myBox");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
  props.showAlert("Copied to clipboard", "Success")
}
const Alternate = ()=>{
  let newText = text.split('').map( (letter,i) => (i % 2) === 0 ?  letter.toUpperCase() : letter.toLowerCase() ).join('');
  setText(newText);
  props.showAlert("Converted to alternate case", "Success")
}
const Reverse = ()=>{
  let newText = text.split(' ').reverse().join(' ');
  setText(newText);
  props.showAlert("Reversed", "Success")
}
const readTxt = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function(event){
      setText(event.target.result);
  };
  reader.readAsText(file);
  props.showAlert("Reading Completed", "Success")
} 

const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert("Downloaded", "Success")
}
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("Capitalize", "Success")
}
  const handleonChange = (event) =>{
    //console.log("On Change")
    setText(event.target.value)
    
}
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
   <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor : props.mode === 'dark' ? 'white' : '#ECF9FF'}} id="myBox" rows="10"></textarea>
     </div>
     <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-dark mx-1" onClick={handleComma}>Add Comma</button>
     <button className="btn btn-dark mx-1" onClick={handleRemoveComma}>Remove Comma</button>
     <button className="btn btn-dark mx-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
     <button className="btn btn-dark mx-1" onClick={speak}>Speak</button>
     <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy to Clipboard</button>
     <button className="btn btn-dark mx-1" onClick={downloadTxtFile}>Download Text</button>
     <button className="btn btn-dark mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
     <button className="btn btn-dark mx-1 my-1" onClick={handleSrchClick}>Search</button>
     <button className="btn btn-dark mx-1 my-1" onClick={Reverse}>Reverse</button>
     <button className="btn btn-dark mx-1 my-1" onClick={Alternate}>Alternate</button>
     <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/>
     <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
</div>
      <div className="container my-2" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * (text.trim() === '' ? 0 : text.match(/\S+/g).length)}</b> Minutes read</p>
        
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
      </div>
</>
  );
}
