/**
 * Created by pohchye on 27/6/2016.
 */

// load express module
var express = require("express");
// create an instance of express application
var app = express();

// app.use(__dirname + "/public");

//use public directory for express files
// app.use(
//     express.static(__dirname + "/public")
// );

var port = 3000;
var staticdir = __dirname + "/public";
var version = 1;
var i = 2;

while (i < process.argv.length){
    switch(process.argv[i]){
        // console.info("in the loop");
        case "-v":
            console.info("Version: %d", version);
            break;
        case "-p":
            i = i + 1;
            port = process.argv[i];
            break;
        case "-d":
            i = i + 1;
            staticdir = process.argv[i];
            break;
        default:
    }
    i += 1;
} 


app.use(
    express.static(staticdir)
);
// Can define more than one static. It will look for files on the first definition first
// app.use(
//     express.static(__dirname + "/image")
// );
app.set("port", port);

console.info("__dirname: %s", __dirname);
// for (var i=0; i < process.argv.length; i++)
//     console.info("argv: %d = %s", i, process.argv[i]);

// app.set("port", process.argv[2] || 3000);
app.listen(
    app.get("port"),
    function(){
        console.info("Applocaition started on port " + app.get("port"));
        console.info("Application started on port %d and directory %s", port, staticdir);
    }
);


