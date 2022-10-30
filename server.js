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
    const { book } = req.body;
    if (book)
    {
        connection.query(`SELECT * FROM BOOKSHELF WHERE name LIKE '${book}'`, (error, result) => {
        if (error)
            res.end();
        else
            console.log(result)
        })
    }
    res.end();
})

app.post('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            connection.query(`INSERT INTO BOOKSHELF (name) VALUES('${book}')`);
            console.log("Data Inseted")
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
        try {
            connection.query(`DELETE FROM BOOKSHELF WHERE name = '${book}'`)
            console.log("Data Deleted")
        }
        catch (err){
        }
    }
    res.send(book)
})

app.patch('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            connection.query(`UPDATE BOOKSHELF SET name = '${book}' WHERE id = 1`);
            console.log("Data updated")
        }
        catch (err){
        }
    }
    res.send(book)
})

app.listen(3306, () =>{
    console.log('server is running on Port 2000')
})
