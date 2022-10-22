const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('chayavit wongharimart')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'chayavit wongharimart',
        age: 21,
        apocalypse: 'Be yourself no matter whatever they say.' ,
        detail: 'Currently studying in the Faculty of Multimedia Engineering from Bangkok University.'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: 'chayavit wongharimart' ,
        age: 21 ,
        email: 'chayavit.wong@bumail.net' ,
        address: 'bangkok'
    }
    res.send(data)
})

app.get('/project', (req, res) => {
    let data = {
        project_name: 'Rig 2D vtuber' ,
        project_description: 'ฝึกrig 2d' ,
        project_link: 'https://www.youtube.com/watch?v=zD-vaUa5sSA'
    }
    res.send(data)
})

app.get('/contact', (req, res) => {
    let data = {
        address: 'bangkok' ,
        email: 'chayavit.wong@bumail.net' ,
        phone_number: '0967615215' 
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})