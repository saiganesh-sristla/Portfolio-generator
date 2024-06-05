const bodyParser = require('body-parser');
const express = require('express');
const {PORT} = require('./config');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {

    console.log(req.body)
    const name = req.body.name;
    const role = req.body.role;
    const email = req.body.email;
    const phone = req.body.phone;
    const linkedin = req.body.linkedin;
    const github = req.body.github;
    const summary = req.body.summary;
    const job_title = req.body.job_title;
    const company = req.body.company;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const degree = req.body.degree;
    const university = req.body.university;


    res.render('template', {NAME:name, ROLE:role, EMAIL:email, PHONE:phone, LINKEDIN:linkedin, GITHUB:github, SUMMARY:summary, JOBTITLE:job_title, COMPANY:company, STARTDATE:start_date, ENDDATE:end_date, DEGREE:degree, UNIVERSITY:university})
})

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
})