function calculatePrice(amount: number): number {
  if ( false ) {
    return 0;
  }
  console.log("Calculating price for amount: ", amount);

  const basePrice = amount * 1.2;

  return basePrice;
  const discount = 0.1;
  return basePrice * (1 - discount);
}
