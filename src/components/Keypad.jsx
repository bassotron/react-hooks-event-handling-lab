// Code Keypad Component Here
import React from 'react';


function Keypad({input}) {
	function handleKeypad(event) {
event.preventDefault()
console.log("Entering password...")
	}
return ( <input onChange={handleKeypad}></input>
	
	)
	
}

export default Keypad
