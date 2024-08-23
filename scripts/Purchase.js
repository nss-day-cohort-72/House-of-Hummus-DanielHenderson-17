import { Purchase } from "./TransientState.js";

const handlePurchaseClick = (clickEvent) => {
    if (clickEvent.target.id === "purchaseCombo") {
        Purchase()
    }
}

export const SavePurchase = () => {
    document.addEventListener("click", handlePurchaseClick)

    return `<div class="ms-5 my-2"><button id='purchaseCombo' class='btn btn-danger'>Purchase Combo</button></div>`
}
