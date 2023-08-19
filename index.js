
for (var kitDrum = 0; kitDrum <= 6; kitDrum++) {
    document.querySelectorAll(".drum")[kitDrum].addEventListener("click", function () {
       key_board(this.innerHTML);
    })}; 

    document.addEventListener("keydown", function (x) {
        key_board(x.key);
    });

    function key_board(keySelect) {
    var animation = keySelect;
    switch (keySelect) {
             case "w":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                
                break;

            case "a":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;

            case "s":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                
            case "d":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                
            case "j":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                
            case "k":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;    
                
            case "l":
                document.querySelector("." + keySelect).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("." + keySelect).classList.remove("pressed");
                }, 125);
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;        

        default:
            break;
    }    
}







            
       