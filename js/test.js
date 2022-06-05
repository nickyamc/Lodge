import { User } from '../models/user.js'

console.log(User.all)

console.log(User.save("1234567", "Nick", "macedo", 15, "nick@gmail.com", "niki"))
console.log(User.save("1234567", "Nick", "macedo", 15, "nick@gmail.com", "niki"))
console.log(User.save("1234567", "Nick", "macedo", 15, "nick@gmail.com", "niki"))



console.log(User.get(1))


