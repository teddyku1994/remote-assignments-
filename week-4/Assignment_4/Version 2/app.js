var  express=require('express');
    var  bodyParser = require('body-parser')
    var  app=express();
    var mysql=require('mysql');
    app.set('view engine', 'pug'); 
    app.set( __dirname,'views');
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

   //My SQL
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'luckybear99',
        database : 'assignment',
    });
    connection.connect();

    // User Login Page
    app.get('/',function (req,res) {
        res.render('index');
    })

    
    app.post('/login',function (req,res) {
        var  username=req.body.username;
        var password=req.body.password;
    console.log('username:'+username+'password:'+password);

        var selectSQL = "select * from users where username = '"+username+"' and password = '"+password+"'";
        connection.query(selectSQL,function (err,rs) {
            if (err) throw  err;
                if (!username || !password) {
                  res.render('index-fail2')
                }
                if (rs.length==0){
                res.render('error',{title:'WARNING',message:'Sorry, username: '+username+ ' does not exist'});
                return;
                }
                res.redirect('/member');
        })
    })

    // Member Page
    app.get('/member',function (req,res) {
      res.render('member');
    })

    // User Sign Up   
    app.get('/registerpage',function (req,res) {
      res.render('registerpage',{title:'Register'});
    })

    // User Sign up data processing
    app.post('/register',function (req,res) {
        var  username=req.body.username;
        var  email=req.body.email;
        var  password=req.body.password;
        var  user={username:username,email:email,password:password};
        let sql = 'insert into users set ?'
        connection.query(sql ,user,function (err,rs) {
            if (err) res.render('index-fail');
           res.redirect('/member');
        })
    })

    var  server=app.listen(3000,function () {
        console.log("Test server on localhost 3000 starting...");
    })