import { setSideChoice } from "./TransientState.js"

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let optionsHTML = `<ul>`

    const optionElements = sides.map((side) => {
        return `<li><input type="radio" name="sideDish" value="${side.id}" /> ${side.title} - $${side.price.toFixed(2)}</li>`
    })

    optionsHTML += optionElements.join("");
    optionsHTML += `</ul>`

    document.addEventListener("change", (event) => {
        if (event.target.name === "sideDish") {
            setSideChoice(parseInt(event.target.value))
        }
    })

    return optionsHTML
}
