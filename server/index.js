const express = require ('express');
const socket =require('socket.io')
const app = express();
const cors = require ('cors');

app.use(cors());
app.use(express.json());




const server = app.listen('3002', ()=> console.log('Server running on port 3002!!!'));

io = socket(server);

io.on('connection', (socket)=>{
    console.log(socket.id)// Random id given to whoever logs into the application
    //data represents the room we are creating  by receiving data and creating that room
    socket.on('join_room', (data)=>{
        socket.join(data)
        console.log('User joined room' + data);
    });

    socket.on('disconnect', ()=> {
        console.log('USER DISCONNECTED')
    })
    });