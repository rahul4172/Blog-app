const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const app = express();

// connect to mongodb 

const dbURI = 'mongodb+srv://james:rock12@nodetuts.vvspysj.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=>  app.listen(3000))
 .catch((err)=>    console.log(err));



// Register view engine 
app.set('view engine','ejs');


// listen for request 

// app.listen(3000);

// Middleware and static files 
app.use(express.static('public'));

app.use(morgan('dev'));


app.get('/', (req,res) => {
 
    // res.send('<p>Helllo Home Page</p>')
    // res.sendFile('./views/index.html',{root:__dirname});

    const blogs = [
        {title:'Yohan finds someone',snippet:'Lorem ipsum dolor sit amet consectetur.'},
        {title:'sushi first blog on indian market',snippet:'Lorem ipsum dolor sit amet consectetur.'},
        {title:'nick blog on songs',snippet:'Lorem ipsum dolor sit amet consectetur.'}
        
    ];
    res.render('index',{title:'Home' ,blogs});
  
});



app.get('/about', (req,res) => {
    
    // res.send('<p>Helllo About Page</p>')
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:'About'});
});


// redirects 

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

// blog create
app.get('/blog/create',(req,res)=>{
    res.render('create',{title:'Blog Create'});
});



// 404 page

app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',{title:'404'});

});