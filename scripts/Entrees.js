import { setEntreeChoice } from "./TransientState.js"

export const Entrees = async () => {
    //gets the entrees object from the API
    const response = await fetch("http://localhost:8088/entrees")
    //converts the response to a json object
    const entrees = await response.json()

    let optionsHTML = `<ul>`

    //iterating through entrees object and returning a radio list with their name and price
    const optionElements = entrees.map((entree) => {
        return `<li><input type="radio" name="entree" value="${entree.id}" /> ${entree.name} - $${entree.price.toFixed(2)}</li>`
    });

    //joining all the elements created into a single string
    optionsHTML += optionElements.join("")
    optionsHTML += `</ul>`

    
    document.addEventListener("change", (event) => {
        //if what is clicked is an entree...
        if (event.target.name === "entree") {
            //update transientState with the id of the selected entree
            setEntreeChoice(parseInt(event.target.value))
        }
    })

    return optionsHTML
}
