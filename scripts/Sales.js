export const Sales = async () => {
    const fetchResponse = await fetch("http://localhost:8088/purchases?_expand=entrees&_expand=veggies&_expand=sides");
    const purchases = await fetchResponse.json();

    let ordersHTML = purchases.map((purchase, receiptNumber) => {
        const orderPrice = purchase.entrees.price + purchase.veggies.price + purchase.sides.price;
        const orderDescription = `Receipt #${receiptNumber + 1} = $${orderPrice.toFixed(2)}`;

        return `<div class="px-3 py-0 order ms-2 w-75 my-0">${orderDescription}</div>`;
    }).join("");

    return ordersHTML;
};


