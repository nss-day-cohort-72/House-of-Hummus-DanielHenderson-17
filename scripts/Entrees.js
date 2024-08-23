export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();

    let html = "<ul>";

    const listItems = entrees.map(entree => {
        return `
            <li>
                <input type="radio" name="entree" value="${entree.id}" /> ${entree.name} - $${entree.price.toFixed(2)}
            </li>`;
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
};
