
const express=require('express')
const app=express();

require('./config/db')

app.use(express.static(__dirname+'/public'))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




app.set("view engine","ejs")

app.use(require('./pages/router'))


app.use(require('./auth/router'))

const PORT=8000


app.listen(PORT, () =>{
    console.log(`This is port11 ${PORT}`);
})