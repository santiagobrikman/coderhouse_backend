const fs = require('fs')

class UserManager {
    constructor(filename) {
        if(fs.existsSync(filename)){
            this.users = JSON.parse(fs.readFileSync(filename))    
        } else {
            this.users = [];
        }
    }
    async createUser(nombre, apellido, edad, curso) {
        const user = {
            nombre,
            apellido,
            edad,
            curso,
            fecha: new Date().toLocaleString()
        }

        this.users.push(user)

        await fs.promises.writeFile(filename, JSON.stringify(this.users, null, '\t'))
    }

    async getUsers(){
        return await this.users
    }
}