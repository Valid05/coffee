const express = require('express')
const mongoos = require('mongoose')
const app = express()
 
const port = 4000
app.use(express.json())

app.use(require('./router/drink.route'))

mongoos.connect('mongodb+srv://galfertaxler:galfertaxler@cluster0.fcjeo4e.mongodb.net/coffe')
.then(()=>console.log('MongoDB успешно запущен'))
.catch(()=>console.log('Ошибка при соединении с MongoDB'))

app.listen(port,()=>{
    console.log(`Сервер успешно запущен http://localhost:${port}`);
});