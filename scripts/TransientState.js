const transientState = {
    entreesId: 0,
    veggiesId: 0,
    sidesId: 0,
}


//updates the entreesId in transientState with the ID of the entree the user selects
export const setEntreeChoice = (chosenEntreeId) => {
    transientState.entreesId = chosenEntreeId
    console.log(transientState)
}

//updates the veggiesId in transientState with the ID of the veggie the user selects
export const setVeggieChoice = (chosenVeggieId) => {
    transientState.veggiesId = chosenVeggieId
    console.log(transientState)
}

//updates the sidId in transientState with the ID of the side the user selects
export const setSideChoice = (chosenSideId) => {
    transientState.sidesId = chosenSideId
    console.log(transientState)
}


//sends the user's selected choices which are stored in TransientState to the server
export const Purchase = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    };

    //sends the data to the server at /purchases
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    await response.json()

    //after the response and the server responds we dispatch the custom event named newPurchaseCreated
    const customEvent = new CustomEvent("newPurchaseCreated")
    document.dispatchEvent(customEvent)
}