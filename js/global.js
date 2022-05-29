import { Booking } from "../models/booking.js";
import { Client } from "../models/client.js";
import { Room } from "../models/room.js";
import { User } from "../models/user.js";

if (!Room.all()) {
    localStorage.setItem("arrayRooms", JSON.stringify([new Room(1,"A001", "Simple", 100, "Habitación simple", "/img/habitacion.jpg", 1),
                                                       new Room(2,"A002", "Simple", 100, "Habitación simple", "/img/habitacion.jpg", 1),
                                                       new Room(3,"A003", "Doble", 150, "Habitación doble", "/img/habitacion.jpg", 2),
                                                       new Room(4,"A004", "Matrimonial", 140, "Habitación matrimonial", "/img/habitacion.jpg", 2)]))
}

if (!Booking.all()) {
    localStorage.setItem("arrayBookings", JSON.stringify([]))
}

if (!Client.all()) {
    localStorage.setItem("arrayClients", JSON.stringify([]))
}

if (!User.all()) {
    localStorage.setItem("arrayUsers", JSON.stringify([new User(1, "12345678", "Nick", "Macedo", 21, "nick@gmail.com", "nick123")]))
}