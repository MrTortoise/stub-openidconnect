
const url = require('url')

describe('running service on 3000 will', () => {
    it('return authorization code on hitting authorize endpoint and goes to callback', async () => {
        await fetch('http://localhost:3000/authorize?client_id=kbyuFDidLLm280LIwVFiazOqjO3ty8KH&redirect_uri=http://localhost:3000/callback&scope=openid profile email phone address&response_type=code&state=dff76686113544fb79cc6c48a0b0c2a7494b5484')
            .then(response => response.text())
            .then(data => expect(data).toBe('callback'))
            .catch(error => expect(error).toBe('error'));
    })

    it('exchanges the access token', async () => {
        await fetch('http://localhost:3000/token?response_type=token&client_id=dave', { method: "POST" })
            .then(response => response.json())
            .then(data => expect(data).toEqual({ access_token: 'token', token_type: 'bearer' }))
            .catch(error => expect(error).toBe('error'));
    })
})