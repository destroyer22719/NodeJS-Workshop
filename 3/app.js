const express = require("express");
const app = express();
const port = process.env.NODE_ENV || 3000;
let blogs = require("./data.json");
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/blogs", (req, res) => {
    res.send(blogs);
});

app.get("/blogs/:id", (req, res) => {
    const foundBlog = blogs.find(blog => blog.id === +req.params.id);
    if (foundBlog) {
        res.send(foundBlog);
    } else {
        res.status(404).send({error: "Blog Not Found"})
    }
});

app.post("/blogs", (req, res) => {
    const newBlog = {
        ...req.body,
        id: blogs.length + 1
    }
    blogs.push(newBlog);
    res.send(newBlog);
});

app.delete("/blogs/:id", (req, res) => {
    blogs = blogs.filter(blog => blog.id !== +req.params.id);
    res.send(blogs);
});

app.put("/blogs/:id", (req, res) => {
    for(let i = 0; i < blogs.length; i++) {
        console.log(blogs[i]);
        if (blogs[i].id === +req.params.id) {
            blogs[i] = req.body
            return res.send(blogs[i]);
        }
    }
    return res.status(404).send({error: "Blog Not Found!"});
});

app.listen(port, () => console.log(`listening on port ${port}`));