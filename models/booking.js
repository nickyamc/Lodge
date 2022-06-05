import { Room } from "./room.js"

let arrayBookings = []

export class Booking {
    constructor(id, user, clients, rooms, startDate, endDate) {
        this.id = id
        this.user = user
        this.clients = clients
        this.rooms = rooms
        this.startDate = startDate
        this.endDate = endDate
    }

    static save(user, clients, rooms, startDate, endDate) {
        try {
            let { bookings } = Booking.all
            let booking = new Booking((bookings.length === 0 ? 1 : Booking.newId), user, clients, rooms, new Date(startDate), new Date(endDate))
            bookings.push(booking)
            arrayBookings = bookings
            return {
                booking: booking,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Booking.save() => ${error.message}`)
            return {
                booking: undefined,
                queryStatus: false
            }
        }
    }

    static get all() {
        try {
            return {
                bookings: arrayBookings,
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Booking.all() => ${error.message}`)
            return {
                bookings: undefined,
                queryStatus: false
            }
        }
    }

    static get(id) {
        try {
            let { bookings } = Booking.all
            return {
                booking: bookings.find((booking) => booking.getId === id),
                queryStatus: true
            }
        } catch (error) {
            console.error(`Error en el metodo Booking.get() => ${error.message}`)
            return {
                booking: undefined,
                queryStatus: false
            }
        }
        
    }

    static get newId() {
        try {
            let { bookings } = Booking.all
            return bookings.length == 0 ? 1 : bookings.find(booking => {
                return (bookings.filter(bok => bok.getId > booking.getId).length === 0) ? true : false
            }).id + 1
        } catch (error) {
            console.error(`Error en el metodo Booking.newid() => ${error.message}`)
            return isNaN
        }
    }

    static delete(id) {
        try {
            let { bookings } = Booking.all
            let { booking } = Booking.get(id)
            bookings.splice(bookings.lastIndexOf(booking), 1)
            arrayBookings = bookings
            return true
        } catch (error) {
            console.error(`Error en el metodo Booking.delete() => ${error.message}`)
            return false
        }
    }

    static filter(startDate, endDate, capacity) {
        const start = new Date(startDate).getTime(),
              end = new Date(endDate).getTime()
        let { rooms } = Room.all,
            { bookings } = Booking.all
        rooms = rooms.filter(room => room.getCapacity >= capacity)

        booking = bookings.filter(booking => booking.getStartDate.getTime() >= start || booking.getEndDate.getTime() <= end)
        bookings = bookings.filter(booking => {
            for(const room of booking.getRooms) {
                for (const iterator of rooms) {
                    if (room.getId === iterator.getId) {
                        return true
                    }
                }
            }
            return false
        })
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