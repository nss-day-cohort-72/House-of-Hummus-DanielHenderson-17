import { setSideChoice } from "./TransientState.js"

export const Sides = async () => {
    //gets the sides object from the API
    const response = await fetch("http://localhost:8088/sides")
    //converts the response to a JSON object
    const sides = await response.json()

    let optionsHTML = `<ul>`

    //iterating through sides object and returning a radio list with their title and price
    const optionElements = sides.map((side) => {
        return `<li><input type="radio" name="sideDish" value="${side.id}" /> ${side.title} - $${side.price.toFixed(2)}</li>`
    })

    //joining all the elements created into a single string
    optionsHTML += optionElements.join("")
    optionsHTML += `</ul>`

    document.addEventListener("change", (event) => {
        //if what is clicked is a side dish...
        if (event.target.name === "sideDish") {
            //update transientState with the id of the selected side dish
            setSideChoice(parseInt(event.target.value));
        }
    })

    return optionsHTML
};
