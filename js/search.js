import { Booking } from "../models/booking.js"
import { Room } from "../models/room.js"

let cardsRooms = document.getElementById("cards-rooms")

let startDate = document.getElementById("start_date")
let endDate = document.getElementById("end_date")

function htmlCardRoom(room) {
    let html = `<div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card">
                        <img src="${room.imgURL}" alt="" class="card-img-top">
                        <div class="card-body">
                            <div class="d-flex">
                                <div>
                                    <h5 class="card-title">Habitación ${room.type}</h5>
                                </div>
                                <a href="#" class="ms-auto btn btn-success" onclick="">Agregar</a>
                            </div>
                            <h6 class="card-subtitle mb-2 text-muted">Capacidad: ${room.capacity} Personas</h6>
                            <div class="d-flex" style="margin-bottom: -15px;">
                                <p>Descripción <i class="bi bi-info-circle text-warning"></i></p>
                                <h5 class="ms-auto"><strong>S/ ${room.price}</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
                `
    return html
}

Room.all().forEach(element => {
    cardsRooms.innerHTML += htmlCardRoom(element)
});

document.getElementById("btn_filter").addEventListener("click", e => {
    cardsRooms.innerHTML = ""
    Booking.filter(startDate.ariaValueMax, endDate.value).forEach(element => {
        cardsRooms.innerHTML += htmlCardRoom(element)
    });
})

function btnAddRoom(id) {

}