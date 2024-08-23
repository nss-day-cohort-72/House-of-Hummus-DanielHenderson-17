import { setEntreeChoice } from "./TransientState.js"

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let optionsHTML = `<ul>`

    const optionElements = entrees.map((entree) => {
        return `<li><input type="radio" name="entree" value="${entree.id}" /> ${entree.name} - $${entree.price.toFixed(2)}</li>`
    });

    optionsHTML += optionElements.join("")
    optionsHTML += `</ul>`

    document.addEventListener("change", (event) => {
        if (event.target.name === "entree") {
            setEntreeChoice(parseInt(event.target.value))
        }
    })

    return optionsHTML
}
