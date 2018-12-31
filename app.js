const express = require('express');
const ejs = require('ejs');
const router = require('./routers/mainRouter');
const app = express();

app.set('view engine','ejs');
app.engine('html', ejs.renderFile);
router.router(app);


app.listen(8008,()=>{
    console.log('server is run on http://localhost:8008');
});