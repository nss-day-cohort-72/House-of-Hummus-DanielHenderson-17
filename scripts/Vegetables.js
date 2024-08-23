import { setVeggieChoice } from "./TransientState.js"

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/veggies")
    const veggies = await response.json()

    let optionsHTML = `<ul>`

    const optionElements = veggies.map((vegetable) => {
        return `<li><input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type} - $${vegetable.price.toFixed(2)}</li>`
    })

    optionsHTML += optionElements.join("")
    optionsHTML += `</ul>`

    document.addEventListener("change", (event) => {
        if (event.target.name === "vegetable") {
            setVeggieChoice(parseInt(event.target.value))
        }
    })

    return optionsHTML
}
