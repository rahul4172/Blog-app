const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');


const app = express();

// connect to mongodb 

const dbURI = 'mongodb+srv://rahul:rock12@cluster0.oyiubqm.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=>  app.listen(3000))
 .catch((err)=>    console.log(err));



// Register view engine 
app.set('view engine','ejs');


// listen for request 

// app.listen(3000);

// Middleware and static files 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


// Mongoose and mongo sandbox  routes 

app.get('/add-blog',(req,res)=>{
    const blog2 = new Blog({
        title : 'new blog 3' ,
        snippet : 'about my new blog',
        body :'more about my new blog'
    })

    blog2.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
});
});

app.get('/all-blogs',(req,res)=>{
     Blog.find()
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        console.log(err);
     });
});

app.get('/single-blog',(req,res)=>{
    Blog.findById('6364014e2caaacb368d259f9')
    .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        console.log(err);
     });
})


app.get('/', (req,res) => {
 
    // res.send('<p>Helllo Home Page</p>')
    // res.sendFile('./views/index.html',{root:__dirname});

    res.redirect('/blogs');
  
});

// blog routes
app.use('/blogs',blogRoutes);


app.get('/about', (req,res) => {
    
    // res.send('<p>Helllo About Page</p>')
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:'About'});
});


// redirects 

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});




// 404 page

app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',{title:'404'});

});