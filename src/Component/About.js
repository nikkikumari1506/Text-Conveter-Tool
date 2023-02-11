import React, {useState} from 'react';

export default function About() {

    const [myStyle] =useState({
        backgroundColor : '#343a40',
        color : 'white',
        borderRadius: '6px'
    })


  
    return (

    <div className="container my-2" style={myStyle}>
        <h1 clasName="my-3">Wiki</h1>
                <p>Welcome to <b>Text Converter Tool</b> - A Text Converter Tool
                    A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:</p>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Convert to Uppercase
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

                To do this, you simply have to select the text that you need changing and pasting into the box above and then select the <b>Convert to Uppercase</b> tab.
                <p>THIS IS AN EXAMPLE OF UPPER CASE.</p>

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Convert to Lowercase
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘Convert to Lowercase’ tab.
                <p>this is an example of lower case.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                Capitalized Case
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.

                Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.
                <p>This Is An Example Of Capitalized Case.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >
                Alternating Case
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.   
                <p>tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.</p>           
                  </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" >
                Remove Extra Spaces
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                It will remove extra spaces from the text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" >
                Reverse
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                Text will me reversed. For example:
                <p>text the Enter</p>

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" >
                    Copy to clipboard
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    The entered text will bw copied to your clipboard.
                    </div>
                </div>
            </div>
                
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" >
                    Download Text
                </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    Text will be downloaded in text format.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine" >
                    Search
                </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    If you want to check whether the Word is present or not in the entered text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen" >
                    Add Comma
                </button>
                </h2>
                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    Comma will be added to the text. For example:
                    <p>Enter, text, here</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven" >
                    Remove Comma
                </button>
                </h2>
                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    All commas present in the entered text will me removed. For example:
                    <p>Enter, text, here -converted to- Enter text here </p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwelve">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve" >
                   Speak
                </button>
                </h2>
                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                   You will be able to listen the entered text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThirteen">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen" >
                    Choose File 
                </button>
                </h2>
                <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                     This button is used to upload a text file which you want to see in the text area.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingf">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapsef" aria-expanded="false" aria-controls="collapsef" >
                    Clear
                </button>
                </h2>
                <div id="collapsef" className="accordion-collapse collapse" aria-labelledby="headingf" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    This button removes the text from the text area.
                </div>
                </div>
            </div>
            </div>
            
        </div>
        
  );
}
