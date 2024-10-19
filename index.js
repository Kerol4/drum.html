for(var i=0; i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML= this.innerHTML;
    getKey(buttonInnerHTML);
    buttonAnimated(buttonInnerHTML);
});


}

document.addEventListener("keydown", function(event){
    getKey(event.key);
    buttonAnimated(event.key);

});


function getKey(key){
        switch (key) {
            case "w":
                var crash = new Audio("crash.mp3");
                     crash.play();
                
                break;
                case "a":
                var kick = new Audio("kick-bass.mp3");
                     kick.play();
                
                break;
                case "s":
                var snare = new Audio("snare.mp3");
                     snare.play();
                
                break;
                case "d":
                var tom1 = new Audio("tom-1.mp3");
                     tom1.play();
                
                break;
                case "j":
                var tom2 = new Audio("tom-2.mp3");
                     tom2.play();
                
                break;
                case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                     tom3.play();
                
                break;
                case "l":
                var tom4 = new Audio("tom-4.mp3");
                     tom4.play();
                
                break;
                
            default: console.log();
                break;
        }
    } 


    function buttonAnimated(currentKey){
        var active = document.querySelector("." + currentKey);
        active.classList.add("pressed");
        setTimeout(function(){
            active.classList.remove("pressed");
        },100);
    }