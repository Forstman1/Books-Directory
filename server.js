const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'sami',
//     password: 'secret',
//     database: 'my_db'
// })

// connection.connect()


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true}))

app.get('/', (req, res) => {
    // connection.query('SHOW DATABSE', function(error, results, fields){
    //     if (error)
    //         throw error;
    // })
    res.send("GET DATA")
})

app.post('/', (req, res) => {
    const { book, hello } = req.body;
    if (book && hello)
        console.log(book, hello)
    else
        console.log(book, hello)
    res.send("GET DATA")
});



app.listen(3006, () =>{
    console.log('server is running on Port 2000')
})
