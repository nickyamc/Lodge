export class Room {
    constructor(id, number, type, price, description, imgURL, capacity) {
        this.id = id
        this.number = number
        this.type = type
        this.price = price
        this.description = description
        this.imgURL = imgURL
        this.capacity = capacity
    }

    static save(number, type, price, description, imgURL, capacity) {
        try {
            let array = this.all()
            array.push(new Room(array.length + 1, number, type, price, description, imgURL, capacity))
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static all() {
        try {
            return JSON.parse(localStorage.getItem("arrayRooms"))
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static get(id) {
        try {
            return this.all().find((room) => room.id === id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static update(id, number, type, price, description, imgURL, capacity) {
        try {
            let array = this.all()
            let index = array.lastIndexOf(this.get(id))
            array[index].number = number
            array[index].type = type
            array[index].price = price
            array[index].description = description
            array[index].imgURL =imgURL
            array[index].capacity = capacity
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
    static updateLS(array) {
        localStorage.setItem("arrayRooms", JSON.stringify(array))
    }

    static delete(id) {
        try {
            let array = this.all()
            array.splice(array.lastIndexOf(this.get(id), 1))
            this.updateLS(array)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    get getId() {
        return this.id
    }

    set setId(id) {
        this.id = id
    }

    get getNumber() {
        return this.number
    }

    set setNumber(number) {
        this.number = number
    }

    get getType() {
        return this.price
    }

    set setType(type) {
        this.type = type
    }

    get getPrice() {
        return this.price
    }

    set setPrice(price) {
        this.price = price
    }

    get getDescription() {
        return this.description
    }

    set setDescription(description) {
        this.description = description
    }

    get getImgURL() {
        return this.imgURL
    }

    set setImgURL(imgURL) {
        this.imgURL = imgURL
    }

    get getCapacity() {
        return this.capacity
    }

    set setCapacity(capacity) {
        this.capacity = capacity
    }
}