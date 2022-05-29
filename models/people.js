export class People {
    constructor(id, document, firstname, lastname, age) {
        this.id = id
        this.document = document
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    get getId() {
        return this.id
    }

    set setId(id) {
        this.id = id
    }

    get getDocument() {
        return this.document
    }

    set setDocument(document) {
        this.document = document
    }

    get getFirstname() {
        return this.firstname
    }

    set setFirstname(firstname) {
        this.firstname = firstname
    }

    get getLastname() {
        return this.lastname
    }

    set setLastname(lastname) {
        this.lastname = lastname
    }

    get getAge() {
        return this.age
    }

    set setAge(age) {
        this.age = age
    }
}