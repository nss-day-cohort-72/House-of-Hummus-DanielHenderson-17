import { Purchase } from "./TransientState.js";


//when Purchase combo button is clicked...
const handlePurchaseClick = (clickEvent) => {
    //if that button that was clicked has an id of #purchaseCombo, it calls the Purchase() function that is imported from TransientState.js
    if (clickEvent.target.id === "purchaseCombo") {
        Purchase()
    }
}


//returns the HTML for the Purchase Combo button
export const SavePurchase = () => {
    document.addEventListener("click", handlePurchaseClick)

    return `<div class="ms-5 my-2"><button id='purchaseCombo' class='btn btn-danger'>Purchase Combo</button></div>`
}
