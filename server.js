const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();
//require('./config/component.config');

app.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true })
    )

//require('./routes/component.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );



//socket setup from demo
const io = require('socket.io')(server);

io.on("connection", socket => {
    socket.on('message_from_client', data => {
        socket.broadcast.emit('message_from_server', data);
    })
})
