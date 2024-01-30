
import express from 'express';
import {  format } from 'url';

const app = express()
const port = 3000

app.get('/authorize', (req, res) => {
    const { query } = req
    console.log(query)
    res.redirect(format({
        pathname: query.redirect_uri,
        query: {
            code: 'authcode', state: query.state
        }
    }))
})

app.get('/callback', async (req, res) => {
    console.log('in callback')
    res.send('callback')
})

app.post('/token', (req, res) => {        
    res.json({access_token:'token', token_type: 'bearer'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})