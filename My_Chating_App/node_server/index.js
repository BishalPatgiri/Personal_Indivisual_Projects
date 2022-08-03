// Node server which will hnadle socket io connections

const io=require("socket.io")(8000)
  
const users={}

io.on("connection",socket=>{                    ///for all connection io.on
    socket.on("new-user-joined",name=>{  
        console.log("Hello",name)        ///for perticuler connection socket.on
        users[socket.id]=name;
        socket.broadcast.emit("user-joined",name)
    });
    
    socket.on("send",message=>{
        socket.broadcast.emit("receive", {message:message,name:user[socket.id]})
    })
});