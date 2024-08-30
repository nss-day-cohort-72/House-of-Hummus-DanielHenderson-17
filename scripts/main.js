import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { SavePurchase } from "./Purchase.js"
import { Sales } from "./Sales.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const entreeOptions = await Entrees()
    const veggieOptions = await Veggies()
    const sideDishOptions = await Sides()
    const SavePurchaseHTML = SavePurchase()
    const salesHTML = await Sales()
    
    const composedHTML = `
        <header class="header ms-5 mt-5">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="selections row mx-auto">
            <section class="selection card shadow col-3 mx-auto p-3 choices__base">
                <h2>Base Dish</h2>
                ${entreeOptions}
            </section>
            <section class="selection card shadow col-3 mx-auto p-3 choices__veggies">
                <h2>Vegetable</h2>
                ${veggieOptions}
            </section>
            <section class="selection card shadow col-3 mx-auto p-3 choices__sides">
                <h2>Sides</h2>
                ${sideDishOptions}
            </section>
        </article>
        <div id="purchase" class="ms-4 mt-4">${SavePurchaseHTML}</div>
        
        <article class="ms-5 mt-5 pt-3 customerOrders">
            <h2 class="ms-4">Monthly Sales</h2>
            <div class="ms-4">${salesHTML}</div>
        </article>
    `

    mainContainer.innerHTML = composedHTML
}

document.addEventListener("newPurchaseCreated", renderAllHTML)

renderAllHTML()
