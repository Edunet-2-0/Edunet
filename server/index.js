require('dotenv').config();
const express = require('express');
const socket = require('socket.io');
//const http = require('http');





const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
//Routes...
const routes = require('./routes');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/auth', routes.auth);
app.use('/courses', routes.courses);
app.use('/category', routes.category);

app.use('/students', routes.students);

app.use('/teachers', routes.teachers);
app.use('/video', routes.videos)


// io.on('new-message', (message) => {
//     io.emit(message);
//   });

const port = process.env.PORT || 8080;
const server = app.listen(port , () => {
    
    console.log(`listening on port ${port}`);
});
// socket steUp 
var io = socket(server);
// Listen to new connection and show message in browser
io.on('connection' ,(socket)=>{
    console.log(`New connection ${socket.id}`)
 // Listening for chat event  
    socket.on('chat',(data)=>{
         io.sockets.emit('chat',data)   
    })
    socket.on('typing',(data)=>{
        io.sockets.emit('typing',data)
    });

});
