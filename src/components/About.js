import React from 'react'

export default function About(props) {
  return (
    <div style={{color : props.mode==='light'?'black':'white'}}>
     <h1 className="text-decoration-underline">About Us</h1> 
     <p>Text-Utils is Text Utility Website which is Used to Manipulate Text with Following Property:</p>
     <ol>
      <li><strong>UpperCase Given Text</strong></li>
      <li><strong>LowerCase Given Text</strong></li>
      <li><strong>Copy Text</strong></li>
      <li><strong>Remove Extra Spaces in Given Text</strong></li>
      <li><strong>Word Count and Character Count with Preview of Text</strong></li>
     </ol>
     <h3 style={{color :'blue'}}>Made Using React</h3>
   </div>
  )
}


