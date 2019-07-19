function swapa() {
    var texta = document.getElementById("texta");
    var textb = document.getElementById("textb");

     if (texta.innerHTML == "" && textb.innerHTML == ""){
        texta.innerHTML = "I'm Right!";
     }
    
    else{
        texta.innerHTML = "No I'm Right!"
        textb.innerHTML = "";
    }
}


function swapb(){
    var texta = document.getElementById("texta");
    var textb = document.getElementById("textb");

    if (texta.innerHTML == "" && textb.innerHTML == ""){
        textb.innerHTML = "I'm Right!";
     }
    
    else{
        textb.innerHTML = "No I'm Right!"
        texta.innerHTML = "";
    }

}