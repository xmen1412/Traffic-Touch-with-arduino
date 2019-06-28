var five = require("johnny-five"); 
var keypress = require('keypress');
keypress(process.stdin);
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var board = new five.Board(); //Arduino board connection 
board.on("ready", function() 
{ 

    var server = app.listen(8082, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at %s:%s Port", host, port)
      });

      app.get('/form', function (req, res) {
        var html='';
        html +="<body>";
        html += "<form action='/thank'  method='post' name='form1'>";
        html += "Masukan Waktu yang penyebrangan(dalam detik):</p><input type= 'text' name='name'>";
        html += "<input type='submit' value='submit'>";
        html += "<INPUT type='reset'  value='reset'>";
        html += "</form>";
        html += "</body>";
        res.send(html);
      });


      app.post('/thank', urlencodedParser, function (req, res){
        var reply='';
        var para = req.body.name * 1000;
        reply += "waktu penyebrangan anda adalah" + req.body.name;
        reply += "silakan tekan sensor";
        res.send(reply);

        sen.within([ 50, 200 ], function(value) {
  
            // This is called when the sensor's value property falls within 100-200
    
            console.log(value);
    
    
            trafficSignal(para);
          
          });
    
        //trafficSignal(para);
                    
       });

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
    function trafficSignal(x){ 
        if (trafficSignalState == 0){ 
            // lampu pejalan kaki meraah nyalah
            console.log("traffic crossing RG"); 
                merah_x.on(); 
                hijau_x.off().stop(); 
                hijau_y.on();
                merah_y.off().stop();


            trafficSignalState = 1; 
            setTimeout(trafficSignal,x); } 
            else if (trafficSignalState == 1)
            { // lampu pejalan kaki hijau_x nyalah 
                console.log("traffic crossing Y"); 

                merah_x.off().stop(); 
                hijau_x.on(); 
                hijau_y.off().stop(); 
                merah_y.on();

            
            trafficSignalState = 2; 
            setTimeout(trafficSignal,30000); } 
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
                    setTimeout(trafficSignal,30000); } }
                    
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


        //trafficSignal(para);
      
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








/*var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at %s:%s Port", host, port)
  });

  app.get('/form', function (req, res) {
    var html='';
    html +="<body>";
    html += "<form action='/thank'  method='post' name='form1'>";
    html += "Masukan Waktu yang penyebrangan(dalam detik):</p><input type= 'text' name='name'>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    res.send(html);
  });

  app.post('/thank', urlencodedParser, function (req, res){
    var reply='';
    var para = req.body.name * 1000;
    reply += "waktu penyebrangan anda adalah" + req.body.name;
    reply += "silakan tekan sensor";
    res.send(reply);

                
   }); */