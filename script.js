let screen = document.querySelector("#screen");


function appendValue (value){
    screen.value += value;
    console.log("Value appended:", screen.value);
}

function clearScreen(){
    screen.value = "";
    console.log("Screen cleared");
}

function calculate(){
    const result = eval(screen.value);
    console.log("Calculation result:", result);
    screen.value = result;
    
}