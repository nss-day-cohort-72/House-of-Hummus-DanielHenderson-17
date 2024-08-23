const transientState = {
    entreesId: 0,
    veggiesId: 0,
    sidesId: 0,
}

export const setEntreeChoice = (chosenEntreeId) => {
    transientState.entreesId = chosenEntreeId
    console.log(transientState)
}

export const setVeggieChoice = (chosenVeggieId) => {
    transientState.veggiesId = chosenVeggieId
    console.log(transientState)
}

export const setSideChoice = (chosenSideId) => {
    transientState.sidesId = chosenSideId
    console.log(transientState)
}

export const Purchase = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    };

    const response = await fetch("http://localhost:8088/purchases", postOptions)
    await response.json()

    const customEvent = new CustomEvent("newPurchaseCreated")
    document.dispatchEvent(customEvent)
}