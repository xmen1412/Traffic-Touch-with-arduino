//trafficsignal.js 
var five = require("johnny-five"); 
var keypress = require('keypress');
keypress(process.stdin);




var board = new five.Board(); //Arduino board connection 
board.on("ready", function() 
{ 
    // Traffic Signal LEDs 
    var hijau_x = new five.Led(12);
    var merah_x = new five.Led(13);



    var hijau_y = new five.Led(7);
    var merah_y = new five.Led(6);



    var sen = new five.Sensor({

        pin: "A0",
        freq: 250, 
        threshold: 5

    });


    this.repl.inject
    ({
       merah_x : merah_x,
       hijau_x : hijau_x,

       merah_y : merah_y,
       hijau_y : hijau_y
    });

    //Signal Green & Red 
    var trafficSignalState = 0; 
    // Initialize Signal State 
    function trafficSignal(){ 
        if (trafficSignalState == 0){ 
            // lampu pejalan kaki meraah nyalah
            console.log("traffic crossing RG"); 
                merah_x.on(); 
                hijau_x.off().stop(); 
                hijau_y.on();
                merah_y.off().stop();


            trafficSignalState = 1; 
            setTimeout(trafficSignal,30000); } 
            else if (trafficSignalState == 1)
            { // lampu pejalan kaki hijau_x nyalah 
                console.log("traffic crossing Y"); 

                merah_x.off().stop(); 
                hijau_x.on(); 
                hijau_y.off().stop(); 
                merah_y.on();

            
            trafficSignalState = 2; 
            setTimeout(trafficSignal,10000); } 
            else if (trafficSignalState == 2)
            { 
                console.log("traffic crossing GR"); 
                merah_x.on(); 
                hijau_x.off().stop(); 
                hijau_y.on();
                merah_y.off().stop();
                trafficSignalState = 3; 
                setTimeout(trafficSignal,30000); } 
                else if (trafficSignalState == 3)
                { // Yellow Yellow 
                    console.log("traffic crossing Y"); 
                    merah_x.off().stop(); 
                    hijau_x.on(); 
                    hijau_y.off().stop(); 
                    merah_y.on();
    
                    trafficSignalState = 0; 
                    setTimeout(trafficSignal,10000); } }
                    
        function mati() {

            merah_x.off().stop(); 
            hijau_x.off().stop();  
            hijau_y.off().stop(); 
            merah_y.off().stop(); 

            
        }


        /*sen.on("change", function() {
            
          });

        */

       sen.within([ 50, 200 ], function(value) {
  
        // This is called when the sensor's value property falls within 100-200

        console.log(value);

        trafficSignal();
      
      });



      


            //trafficSignal();

            process.stdin.on('keypress', function (ch, key) {
                if (key && key.ctrl && key.name == 'd') {
                  console.log("adios Amigos");

                  mati();
                  //process.exit(0);
                }
              });



     
                    //trafficSignal();
                });


                process.stdin.setRawMode(true);
                process.stdin.resume();
