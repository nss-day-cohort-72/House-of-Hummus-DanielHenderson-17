export const Sales = async () => {
    //custom query to get specific details about the selected entree, veggie and side
    const fetchResponse = await fetch("http://localhost:8088/purchases?_expand=entrees&_expand=veggies&_expand=sides");
    //once data is fetched its converted into a JSON object which is an array of all the purchases made so far
    const purchases = await fetchResponse.json();

    //iterates all purchases and while listing each purchase combines the price of the entree, veggie, and side that was selected
    let ordersHTML = purchases.map((purchase, receiptNumber) => {
        const orderPrice = purchase.entrees.price + purchase.veggies.price + purchase.sides.price;
        const orderDescription = `Receipt #${receiptNumber + 1} = $${orderPrice.toFixed(2)}`;

        return `<div class="px-3 py-0 order ms-2 w-75 my-0">${orderDescription}</div>`;
    }).join("");

    return ordersHTML;
};


