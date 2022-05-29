import { Room } from "./room.js"

export class Booking {
    constructor(id, user, clients, rooms, startDate, endDate) {
        this.id = id
        this.user = user
        this.clients =clients
        this.rooms = rooms
        this.startDate = startDate
        this.endDate = endDate
    }

    static save(user, clients, rooms, startDate, endDate) {
        try {
            let array = this.all()
            array.push(new Booking((array.length + 1), user, clients, rooms, new Date(startDate), new Date(endDate)))
            this.updateLS(array)
            
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    static all() {
        try {
            return JSON.parse(localStorage.getItem("arrayBookings"))
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    static get(id) {
        try {
            return this.all().find((booking) => booking.id === id)
        } catch (error) {
            console.error(error)
            return undefined
        }
        
    }

    static updateLS(array) {
        localStorage.setItem("arrayBookings", JSON.stringify(array))
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

    static filter(startDate, endDate) {
        const start = new Date(startDate),
              end = new Date(endDate),
              bookings = Booking.all().filter(booking => start.getTime() >= booking.startDate.getTime() && end.getTime() <= booking.endDate.getTime())

        let roomsFail = []

        if (bookings.length > 0) {
            bookings.forEach(booking => {
                booking.rooms.forEach(room => {
                    if (roomsFail.length > 0) {
                        if (!(roomsFail.some(element => room.id === element.id))) {
                            roomsFail.push(room)
                        }
                    } else {
                        roomsFail.push(room)
                    }
                })
            });
            return Room.all().filter(room => {
                if (roomsFail.some(element => element.id === room.id)) {
                    return false
                } else {
                    return true
                }
            })
        } else {
            return Room.all()
        }
    }

    get getId() {
        return this.id
    }

    set setId(id) {
        this.id = id
    }

    get getUser() {
        return this.user
    }

    set setUser(user) {
        this.user = user
    }

    get getClients() {
        return this.clients
    }

    set setClients(clients) {
        this.clients = clients
    }

    get getRooms() {
        return this.rooms
    }

    set setRooms(rooms) {
        this.rooms = rooms
    }

    get getStartDate() {
        return this.startDate
    }

    set setStartDate(startDate) {
        this.startDate = startDate
    }

    get getEndDate() {
        return this.endDate
    }

    set setEndDate(endDate) {
        this.endDate = endDate
    }
}