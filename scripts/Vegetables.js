import { setVeggieChoice } from "./TransientState.js"

export const Veggies = async () => {
    //gets the veggies object from the API
    const response = await fetch("http://localhost:8088/veggies")
    //converts the response to a JSON object
    const veggies = await response.json()

    let optionsHTML = `<ul>`

    //iterating through veggies object and returning a radio list with their type and price
    const optionElements = veggies.map((vegetable) => {
        return `<li><input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type} - $${vegetable.price.toFixed(2)}</li>`
    });

    //joining all the elements created into a single string
    optionsHTML += optionElements.join("")
    optionsHTML += `</ul>`

    document.addEventListener("change", (event) => {
        //if what is clicked is a vegetable...
        if (event.target.name === "vegetable") {
            //update transientState with the id of the selected vegetable
            setVeggieChoice(parseInt(event.target.value))
        }
    })

    return optionsHTML
};
