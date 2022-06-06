import { People } from "./people.js";

let arrayUsers = []

export class User extends People {
    constructor(id, document, firstname, lastname, age, email, password, admin) {
        super(id, document, firstname, lastname, age)
        this.email = email
        this.password = password
        this.admin = admin 
    }

    static save(document, firstname, lastname, age, email, password, admin) {
        try {
            let { users } = User.all
            let user = new User((users.length === 0 ? 1 : User.newId), document, firstname, lastname, age, email, password, admin)
            users.push(user)
            arrayUsers = users
            return {
                user: user,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo User.save() => ${error.message}`)
            return {
                user: undefined,
                queryStatus: false
            }
        }
    }

    static get(id) {
        try {
            let { users } = User.all
            return {
                user: users.find(user => user.getId === id),
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo User.get() => ${error.message}`)
            return {
                user: undefined,
                queryStatus: false
            }
        }
    }

    static get all() {
        try {
            return { 
                users: arrayUsers,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo User.all() => ${error.message}`)
            return {
                users: undefined,
                queryStatus: false
            }
        }
    }

    static get newId() {
        try {
            let { users } = User.all
            return users.length==0?1:users.find(user => {
                return (users.filter(usr => usr.getId > user.getId).length === 0) ? true : false
            }).id + 1
        } catch (error) {
            console.error(`Error en el metodo User.newid() => ${error.message}`)
            return isNaN
        }
    }

    static update(id, firstname, lastname, age, email, password, admin) {
        try {
            let { users } = this.all
            let { user } = User.get(id)
            const index = users.lastIndexOf(user)
            users[index].setDocument(document)
            users[index].setFirstname(firstname)
            users[index].setLastname(lastname)
            users[index].setAge(age)
            users[index].setEmail(email)
            users[index].setPassword(password)
            users[index].setAdmin(admin)
            arrayUsers = users
            return {
                user: users[index],
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo User.update() => ${error.message}`)
            return {
                user: undefined,
                queryStatus: false
            }
        }
    }

    static login(email, password) {
        try {
            let { users } = User.all
            let user = users.find(user => user.getEmail === email && user.getPassword === password)
            localStorage.setItem("user", JSON.stringify(user))
            return {
                user: user, 
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo User.login() => ${error.message}`)
            return {
                user: undefined,
                queryStatus: false
            }
        }
    }

    static delete(id) {
        try {
            let { users } = User.all
            let { user } = User.get(id)
            users.splice(users.lastIndexOf(user),1)
            arrayUsers = users
            return true
        } catch (error) {
            console.error(`Error en el metodo User.delete() => ${error.message}`)
            return false
        }
    }

    get getEmail() {
        return this.email
    }

    set setEmail(email) {
        this.email = email
    }

    get getPassword() {
        return this.password
    }

    set setPassword(password) {
        this.password = password
    }

    get getAdmin() {
        return this.admin
    }

    set setAdmin(admin) {
        this.admin = admin
    }
}