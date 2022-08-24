const express = require('express');
const cors = require('cors');
const middleware = require('../middleware/index');
const app = express();
const port = 5000;
app.use(cors());
app.use(middleware.decodeToken);

app.get("/",(req,res)=>{
   console.log(req.user);
    return res.json({
        todo:[
            {
                title: 'task1'
            },
            {
                title: 'task2'
            },
            {
                title: 'task3'
            }
        ]
    });
});
app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
});