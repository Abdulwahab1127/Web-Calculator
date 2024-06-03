
const Display = document.getElementById("Display");

function appendToDisplay(input){
    
    Display.value += input;

}

function ClearDisplay(){

    Display.value = "";

}

function Calculate(){

   try{
        Display.value = eval(Display.value);

   }catch(error){
    Display.value = "Error";
   }

}

