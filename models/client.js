import { People } from "./people.js";

export class Client extends People {
    constructor(id, document, firstname, lastname, age) {
        super(id, document, firstname, lastname, age)
    }

    static save(document, firstname, lastname, age) {
        try {
            let array = this.all()
            array.push(new Client(array.length + 1, document, firstname, lastname, age))
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static get(id) {
        try {
            return this.all().find(client => client.id === id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static all() {
        try {
            return JSON.parse(localStorage.getItem("arrayClients"))
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static update(id, firstname, lastname, age) {
        try {
            let array = this.all()
            const index = array.lastIndexOf(this.get(id))
            array[index].document = document
            array[index].firstname =firstname
            array[index].lastname = lastname
            array[index].age = age
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static updateLS(array) {
        localStorage.setItem("arrayClients", JSON.stringify(array))
    }

    static delete(id) {
        try {
            let array = this.all()
            array.splice(array.lastIndexOf(this.get(id)), 1)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}