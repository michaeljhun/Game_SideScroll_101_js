import Player from "./player.js";
import InputHandler from "./input.js";
import {drawStatusText} from "./utils.js"


/* wait assets to fully load */
window.addEventListener("load",function(){
    const loading = this.document.getElementById("loading");        // after fully loaded ↓
    loading.style.display = "none";                                 // hide Loading...
    const canvas = document.getElementById("canvas1");              // setup canvas
    const ctx = canvas.getContext("2d");                            //instantiate get context, for built-in 2d method properties 
    canvas.width = window.innerWidth;                               //set  canvas width height, same for window
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
    const input = new InputHandler();

    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update(input.lastKey);
        player.draw(ctx,deltaTime);
        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate);
    };
    
    animate();

});