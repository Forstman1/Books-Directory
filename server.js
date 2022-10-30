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

let AddNewBook = (book) => {
    connection.query(`INSERT INTO BOOKSHELF (name) VALUES('${book}')`);
    console.log("Data Inseted")
}

let GetBook = (book) => {
    connection.query(`SELECT * FROM BOOKSHELF WHERE name LIKE '${book}'`, (err, result) => {
        console.log(result)
    });
}

let DeleteBook = (book) => {
    connection.query(`DELETE FROM BOOKSHELF WHERE name = '${book}'`)
    console.log("Data Deleted")
}

let UpdateBook = (book) => {
    connection.query(`UPDATE BOOKSHELF SET name = '${book}' WHERE id = 2`);
    console.log("Data updated")
}

app.get('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            GetBook(book);
        }
        catch (err)
        {
            console.log("ana ha")
            res.end();
        }
    }
    res.end();
})

app.post('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            AddNewBook(book);
        }
        catch (err){
            res.end();
        }
    }
    res.send(book)
});

app.delete('/', (req, res) => {
    const { book } = req.body;
    if (book)
    {
        try {
            DeleteBook(book)
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
            UpdateBook(book)
        }
        catch (err){
        }
    }
    res.send(book)
})

app.listen(3306, () =>{
    console.log('server is running on Port 2000')
})
