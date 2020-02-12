import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const port = process.env.PORT || 7600;

app.use(express.static(__dirname+'/public'));
// Html or view file
app.set('views','./src/views');
// template engine
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    var out = []
    res.render('userInput',{out})
});

app.post('/count', (req,res) => {
    let count = req.body.count;
    var out = [];
    if(isNaN(count) === false){
        count = parseInt(count)
        let i;
        for(i=1;i<count;i++){
            if(i%3 == 0 && i%5 == 0){
                out.push("FizzBuzz")
            }else if(i%3 == 0 ){
                out.push("Fizz")
            }else if(i%5 == 0){
                out.push("Buzz")
            } else {
                out.push(i)
            }
        }
    }else{
        out.push('Please enter valid input')
    }
    res.status(200).render('userInput',{out})
})
app.get('/about',(req,res) => {
    res.send('<h1>On about Page</h1>')
});


app.listen(port,(err)=>{
    console.log(`server is running on port ${port}`)
});
