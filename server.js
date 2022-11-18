const express = require('express')

// app can now use all things express:
const app = express()

// to ensure our server can handle requests from local computers (first do npm insall cors -save in terminal):
const cors = require('cors')
app.use(cors())

const PORT = 8000

const rappers = {

    '21 savage': {
        'birthName': 'Helen Gallagher',
        'birthLocation': 'London, England',
        'age': 29
    },

    'chance the rapper': {
        'birthName': 'Donna McKechnie',
        'birthLocation': 'Detroit, Michigan',
        'age': 29
    },

    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
}

app.get('/', (request, response) => {
    // tell server where to go to get index.html file:
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    let rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

// environment variable for host to use own port OR use our defined port of 8000:
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})