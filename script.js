let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button"); 

buttons.forEach (function (button){
    button.addEventListener("click",function(e){
       let calculate = e.target.innerText;
  
        
        if (calculate ==="AC"){
            result.value = "";
        }
        else if (calculate === "DEL" )
            {
        result.value =  result.value.slice (0,-1) ; 
            }
        else if (calculate === "="){
    result.value = eval( result.value );

}
            else if (calculate === "√"){
    result.value = Math.sqrt( result.value);
} 
else if(calculate === "x²"){
    result.value =  result.value **2;
}
else if (calculate === "Qube"){
    result.value =  result.value **3;
}
   
else{
    result.value += calculate 
}
});
});
      
