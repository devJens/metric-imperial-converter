/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = 3.281
const volume = 0.264
const mass = 2.204
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById ("btn-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

function renderImperial(units) {
   return inputEl.value * units
}

function renderMetric(units) {
    return inputEl.value / units
}


btnEl.addEventListener ("click", function() {

    lengthEl.innerHTML = `<p> ${inputEl.value} meters = <span>${renderImperial(length).toFixed(3)}</span> feet | ${inputEl.value} feet = ${renderMetric(length).toFixed(3)} meters </p>`
    
    volumeEl.innerHTML = `<p> ${inputEl.value} liters = <span>${renderImperial(volume).toFixed(3)}</span> gallons | ${inputEl.value} gallons = <span>${renderMetric(volume).toFixed(3)}</span> liters </p>`
    
    massEl.innerHTML = `<p> ${inputEl.value} kilos = <span>${renderImperial(mass).toFixed(3)}</span> pounds | ${inputEl.value} pound = <span>${renderMetric(mass).toFixed(3)}</span> kilos </p>`
}
)





