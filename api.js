// const express = require("express");
// app = express()
// var usersList = [{ id: 1, name: 'priya', age: 22 },
// { id: 2, name: 'rajiv', age: 23 },
// { id: 3, name: 'uma', age: 24 }]
// app.get('/users', (req, res) => {
//     console.log("i am inside get")
//     res.json(usersList)
//     // console.log(req.query['name'])
//     // console.log("i am inside get")
//     // res.send('hi welcome'+ 'my name is' + req.query['name']+ 'and age is'+req.query["age"])
//     // res.json([{name:req.query['name']},{age:req.query['age']}])
// })
// app.get('/:id', (req, res) => {
//     // console.log(res)
//     //    let user=usersList.filter(e=>e.id==req.params.id)
//     res.json(usersList.filter(e => e.id == req.params.id))
// })
// app.get('/myapi', () => {
//     console.log("i am inside myapi")
// })
// app.listen(3000, () => {
//     console.log("Listening on port 3000");
// })
// const express = require("express");
// var mysql = require('mysql');
// app = express()
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'W@2915djkq#',
//     database: 'contactDetails'
// });

// connection.connect();
// app.get('/', (req, res) => {
//     connection.query('SELECT * from contact', function (error, results) {
//         if (error) {
//             console.log(error);
//         }
//         console.log('The solution is: ', results);
//         res.end(JSON.stringify(results))
//     });
// })
// app.listen(3000, () => {
//     console.log("listening port 3000")

// })
// const express = require("express");
// var mysql = require('mysql');
// app = express()
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'W@2915djkq#',
//     database: 'contactDetails'
// });

// connection.connect();
// app.get('/:cName', (req, res) => {
//     connection.query('SELECT * from contact where cName=?',[req.params.cName], function (error, results) {
//         if (error) {
//             console.log(error);
//         }
//         console.log('The solution is: ', results);
//         res.end(JSON.stringify(results))
//     });
// })
// app.listen(3000, () => {
//     console.log("listening port 3000")

// })
const express = require("express");
var mysql = require('mysql');
var cors = require('cors')
 

app = express()
app.use(express.json())
app.use(cors())
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'W@2915djkq#',
    database: 'contact'
});

connection.connect();
app.get('/getall', (req, res) => {
    connection.query('SELECT id,contactName,Email,Comments from contactDetails', function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.end(JSON.stringify(results))
    });
})
// app.post('/insert', (req, res) => {
//     connection.query(`insert into contact (cName,email,message) values ('${req.body.cName}','${req.body.email}','${req.body.message}')`, function (error, results) {
//         if (error) {
//             console.log(error);
//         }
//         console.log(results);
//         res.json(results)
//         // res.end(JSON.stringify(results))
//     });
// })
app.post('/insert', (req, res) => {
    connection.query('insert into contactDetails (contactName,Email,Comments) values (?,?,?)',[req.body.contactName,req.body.Email,req.body.Comments], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
    });
})
app.put('/update', (req, res) => {
    connection.query(`update contactDetails set contactName=?,Email=?,Comments=? where id=?`,[req.body.contactName,req.body.Email,req.body.Comments,req.body.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
    });
})
app.delete('/delete', (req, res) => {
    connection.query(`delete from contactDetails where id=?`,[req.body.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
        // DELETE FROM table_name WHERE condition;
    });
})
app.listen(3000, () => {
    console.log("listening port 3000")
})


