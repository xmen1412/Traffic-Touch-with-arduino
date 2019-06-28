var five = require("johnny-five");
var board = new five.Board();

board.on("ready",function () {

    // red dan green x adalah lampu untuk pejalan kaki

    var red_x = new five.Led(13);
    var green_x = new five.Led(11);


    // red dan green y adalah lampu untuk kendaraan

    var green_y = new five.Led(3);
    var red_y = new five.Led(5);

    flag = 1;


    this.repl.inject({
        red_x : red_x,
        green_x : green_x,
        red_y : red_y,
        green_y : green_y
        
     });


     red_x.on();
     green_y.on()



      this.wait(5000, function() 
      
      {

         // stop() terminates the interval
         // off() shuts the led off
         red_x.stop().off();
         green_y.stop().off();
         red_y.on();
         green_x.on();

         return false;

         this.wait(5000, function(){

            red_y.stop().off();
            green_x.stop().off();
            
         })
         

      })

      red_y.stop().off();
      green_x.stop().off();

    

     
    
})