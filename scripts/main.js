import { Entrees } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
    const entreeOptions = await Entrees();
    const veggieOptions = await Veggies();
    const sideDishOptions = await Sides();

    const composedHTML = `
        <header class="header ms-5 mt-5">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="selections row mx-auto">
            <section class="selection card shadow col-3 mx-auto p-3">
                <h2>Base Dish</h2>
                ${entreeOptions}
            </section>
            <section class="selection card shadow col-3 mx-auto p-3">
                <h2>Vegetable</h2>
                ${veggieOptions}
            </section>
            <section class="selection card shadow col-3 mx-auto p-3">
                <h2>Sides</h2>
                ${sideDishOptions}
            </section>
        </article>
    `;

    mainContainer.innerHTML = composedHTML;
}

renderAllHTML();
