//establish the empty arrays
const jumpStart = []
const chatten = []
const polar = []
//created the genre functions
const createCountryBluegrass = (name, genre, age) => {
    chatten.push( 
    {
        name: name,
        genre: genre,
        age: age
    })
    return
}
const createFunkRap = (name, genre, age) => {
    jumpStart.push( 
    {
        name: name,
        genre: genre,
        age: age
    })
    return
}
const createPop = (name, genre, age) => {
    polar.push( 
    {
        name: name,
        genre: genre,
        age: age
    })
    return
}
//created an object for each artist
const atikens = createCountryBluegrass("Bruce Atikens", "Country", "23")
const brown = createPop("Jensen Brown", "Pop", "20")
const funkz = createFunkRap("Dre Funkz", "Rap", "25")
const davis = createCountryBluegrass("Avilee Davis", "Country", "19")
const grimes = createFunkRap("Dusta Grimes", "Rap", "25")
const danielson = createCountryBluegrass("Bartholomew Danielson", "Bluegrass", "19")
const kinkaid = createPop("Austin Kinkaid ", "Pop", "22")
const branis = createFunkRap("Loyoncé Branis", "Rap", "27")
//console log the genre arrays
console.log(chatten)
console.log(jumpStart)
console.log(polar)
