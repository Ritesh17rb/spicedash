const express = require('express');

require('dotenv').config();
const createConnection = require('./dbconnection/mongoConnection')

const crud = require('./controllers/Crud')


const blog = require('./model/blog');

const app = express();


app.use(express.json());

createConnection();

app.get('/', (req, res) => {
    res.send({

        message: "Hello Ritesh"

    })
})

app.post('/createBlog', crud.createBlog)
app.get('/getBlog', crud.getBlog)

app.get('/getBlog/:id', crud.getBlogById)
app.put('/updateBlogById/:id', crud.updateBlogById)
app.delete('/deleteBlogById/:id', crud.deleteBlogById)




app.listen(process.env.PORT);