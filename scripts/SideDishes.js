export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides");
    const sides = await response.json();

    let html = "<ul>";

    const listItems = sides.map(side => {
        return `
            <li>
                <input type="radio" name="sideDish" value="${side.id}" /> ${side.title} - $${side.price.toFixed(2)}
            </li>`;
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
};
