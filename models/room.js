let arrayRooms = []

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
            let { rooms } = Room.all
            let room = new Room((rooms.length === 0 ? 1 : Room.newId), number, type, price, description, imgURL, capacity)
            rooms.push(room)
            arrayRooms = rooms
            return {
                room: room,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Room.save() => ${error.message}`)
            return {
                room: undefined,
                queryStatus: false
            }
        }
    }

    static get all() {
        try {
            return {
                rooms: arrayRooms,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Room.all() => ${error.message}`)
            return {
                rooms: undefined,
                queryStatus: false
            }
        }
    }

    static get(id) {
        try {
            let { rooms } = Room.all
            return {
                room: rooms.find(room => room.getId === id),
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Room.get() => ${error.message}`)
            return {
                room: undefined,
                queryStatus: false
            }
        }
    }

    static get newId() {
        try {
            let { rooms } = Room.all
            return rooms.length==0?1:rooms.find(room => {
                return (rooms.filter(rm => rm.getId > room.getId).length === 0) ? true : false
            }).id + 1
        } catch (error) {
            console.error(`Error en el metodo Room.newid() => ${error.message}`)
            return isNaN
        }
    }

    static update(id, number, type, price, description, imgURL, capacity) {
        try {
            let { rooms } = User.all
            let { room } = Room.get(id)
            const index = rooms.lastIndexOf(room)
            users[index].setNumber(number)
            users[index].setType(type)
            users[index].setPrice(price)
            users[index].setDescription(description)
            users[index].setImgURL(imgURL)
            users[index].setCapacity(capacity)
            arrayRooms = rooms
            return {
                room: rooms[index],
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Room.update() => ${error.message}`)
            return {
                room: undefined,
                queryStatus: false
            }
        } 
    }

    static delete(id) {
        try {
            let { rooms } = Room.all
            let { room } = Room.get(id)
            rooms.splice(rooms.lastIndexOf(room),1)
            arrayRooms = rooms
            return true
        } catch (error) {
            console.error(`Error en el metodo Room.delete() => ${error.message}`)
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