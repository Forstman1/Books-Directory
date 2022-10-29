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
    const { book } = '*';
    if (book)
    {
        connection.query(`SELECT * FROM BOOKSHELF`, (err, result, fields) => {
            if (err)
                console.log("mal9ithach")
            else
                res.send(result)
        })
    }
})

app.post('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            connection.query(`INSERT INTO BOOKSHELF VALUES('${book}')`);
        }
        catch (err){
        }
    }
    res.send(book)
});

app.delete('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        connection.query(`DELETE '${book}' FROM BOOKSHELF`)
    }
})


app.listen(3306, () =>{
    console.log('server is running on Port 2000')
})
