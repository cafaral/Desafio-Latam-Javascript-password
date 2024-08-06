function ingresar(){
    var number1 = document.getElementById("number1").value
    
    var number2 = document.getElementById("number2").value 
   
    var number3 = document.getElementById("number3").value 
    
    if(((number1 == 9) && (number2 == 1) && (number3 == 1)) || ((number1 == 7) && (number2 == 1) && (number3 == 4))){
        document.getElementById("valor").style.color = "green"
        document.getElementById("valor").innerHTML = "Password Correcto"
    }else{
        document.getElementById("valor").style.color = "red"
        document.getElementById("valor").innerHTML = "Password Incorrecto"
    }
}
