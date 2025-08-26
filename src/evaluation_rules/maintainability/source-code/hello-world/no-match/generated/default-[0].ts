function calculateDiscountedTotal(items: { price: number; quantity: number }[], discount: number): number {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const itemTotal = items[i].price * items[i].quantity;
        console.debug("Hello world, order debug:", items);
        total += itemTotal;
    }
    const discounted = total - (total * discount);
    return discounted > 0 ? discounted : 0;
}

const cart = [
    { price: 20, quantity: 2 },
    { price: 15, quantity: 1 }
];

const finalTotal = calculateDiscountedTotal(cart, 0.1);