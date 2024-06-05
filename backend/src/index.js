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
    res.render('homepage')
})

app.get('/resume', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {

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

    const skills = req.body.skills;
    const skillsArray = skills.split(',');
    const job_description = req.body.job_description;
    const cert_name = req.body.cert_name;
    const cert_issuer = req.body.cert_issuer;
    const cert_date = req.body.cert_date

    
    res.render('template', {NAME:name, ROLE:role, EMAIL:email, PHONE:phone, LINKEDIN:linkedin, GITHUB:github, SUMMARY:summary, JOBTITLE:job_title, COMPANY:company, STARTDATE:start_date, ENDDATE:end_date, DEGREE:degree, UNIVERSITY:university, SKILLS:skillsArray, JOBDESCRIPTION:job_description, CERTNAME:cert_name, CERTISSUER:cert_issuer, CERTDATE:cert_date});
})

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
})