var five = require("johnny-five");

var board = new five.Board();
var flag = 1;

board.on("ready",function () 
{

    var hijau_x = new five.Led(7);
    var merah_x = new five.Led(13);


    this.repl.inject
    ({
       merah_x : merah_x,
       hijau_x : hijau_x
    });




    

    
})