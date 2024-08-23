export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/veggies");
    const veggies = await response.json();

    let html = "<ul>";

    const listItems = veggies.map(vegetable => {
        return `
            <li>
                <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type} - $${vegetable.price.toFixed(2)}
            </li>`;
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
};
