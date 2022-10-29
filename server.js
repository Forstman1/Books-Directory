const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books',
})

connection.connect()


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
    const { name } = req.body;
    if (name)
    {
        try {
            connection.query(`INSERT INTO BOOKSHELF VALUES('${name}')`)
        }
        catch (err){
            console.log(name)

        }
    }
    res.send("GET DATA")
});



app.listen(3306, () =>{
    console.log('server is running on Port 2000')
})
