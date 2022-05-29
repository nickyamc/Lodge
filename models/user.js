import { People } from "./people.js";

export class User extends People {
    constructor(id, document, firstname, lastname, age, email, password) {
        super(id, document, firstname, lastname, age)
        this.email = email
        this.password = password
    }

    static save(document, firstname, lastname, age, email, password) {
        try {
            let array = this.all()
            array.push(new User(array.length + 1, document, firstname, lastname, age, email, password))
            this.update(array)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static get(id) {
        try {
            return this.all().find(user => user.id === id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static all() {
        try {
            return JSON.parse(localStorage.getItem("arrayUsers"))
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static update(id, firstname, lastname, age, email, password) {
        try {
            let array = this.all()
            const index = array.lastIndexOf(this.get(id))
            array[index].documen = document
            array[index].firstname =  firstname
            array[index].lastname = lastname
            array[index].age = age
            array[index].email = email
            array[index].password = password

            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static updateLS(array) {
        localStorage.setItem("arrayUsers", JSON.stringify(array))
    }

    static delete(id) {
        try {
            let array = this.all()
            array.splice(array.lastIndexOf(this.get(id)), 1)
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static login(email, password) {
        try {
            return this.all().find(user => user.email === email && user.password === password)
        } catch (error) {
            console.error(error)
            return undefined
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
}