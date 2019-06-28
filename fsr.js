var five = require("johnny-five") 


new five.Board().on("ready",function(){

    var x = new five.Sensor({

        pin: "A0",
        freq: 25

    });


    x.on("change", function () {
        console.log(this.scaleTo(0, 180));
        
    })

    
})







