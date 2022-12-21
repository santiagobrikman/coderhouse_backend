const fs = require('fs')
const crypto = require('crypto')

class UserManager {
    constructor() {
        try {
            this.users = fs.readFileSync("Usuarios.json", 'utf-8')
            this.users = JSON.parse(this.users)
        } catch (error) {
            this.users = []
        }
    }
    async createUser(name, lastname, username, password) {
        let hashPassword = crypto.createHash('sha256').update(password).digest('hex')
        let user = {
            name, 
            lastname,
            username,
            password: hashPassword
        }
        
        this.users.push(user)

        try{
            fs.promises.writeFile('Usuarios.json', JSON.stringify(this.users, null, '\t'))
            console.log('User Created')
        } catch(error) {
            console.log('Error: ', error)
        }
    }


    validateUser(username, pass) {
        let hashPassword = crypto.createHash('sha256').update(password).digest('hex')
    }
}

const user = new UserManager();

user.createUser("Santiago", "Brikman", "santiagobrikman", "1234")
user.createUser("Luka", "Modric", "lukamodric", "5678")