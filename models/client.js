import { People } from "./people.js";
import { User } from "./user.js";

let arrayClients = []

export class Client extends People {
    constructor(id, document, firstname, lastname, age) {
        super(id, document, firstname, lastname, age)
    }

    static save(document, firstname, lastname, age) {
        try {
            let { clients } = Client.all
            let client = new Client((clients.length === 0 ? 1 : Client.newId), document, firstname, lastname, age)
            users.push(client)
            return {
                client: client,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Client.save() => ${error.message}`)
            return {
                client: undefined,
                queryStatus: false
            }
        }
    }

    static get(id) {
        try {
            let { clients } = Client.all
            return {
                client: clients.find(client => client.id === id),
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Client.get() => ${error.message}`)
            return {
                client: undefined,
                queryStatus: false
            }
        }
    }

    static get all() {
        try {
            return {
                clients: arrayClients,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Client.all() => ${error.message}`)
            return {
                clients: undefined,
                queryStatus: false
            }
        }
    }

    static get newId() {
        try {
            let { clients } = Client.all
            return clients.length === 0 ? 1 : clients.find(client => {
                return (clients.filter(cli => cli.getId > client.getId).length === 0) ? true : false
            }).id + 1
        } catch (error) {
            console.error(`Error en el metodo Client.newid() => ${error.message}`)
            return isNaN
        }
    }

    static update(id, firstname, lastname, age) {
        try {
            let { clients } = Client.all
            let { client } = Client.get(id)
            const index = clients.lastIndexOf(client)
            clients[index].setDocument(document)
            clients[index].setFirstname(firstname)
            clients[index].setLastname(lastname)
            clients[index].setAge(age)
            arrayClients = clients
            return {
                client: clients[index],
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Client.update() => ${error.message}`)
            return {
                client: undefined,
                queryStatus: false
            }
        }
    }

    static delete(id) {
        try {
            let { clients } = Client.all
            let { client } = Client.get(id)
            clients.splice(array.lastIndexOf(client), 1)
            arrayClients = clients
            return true
        } catch (error) {
            console.error(`Error en el metodo Client.delete() => ${error.message}`)
            return false
        }
    }
}