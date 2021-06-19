function formatMoney(amount = 0) {
  if (typeof amount !== 'number') {
    parseInt(amount, 10);
  }

  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
  };
  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
export default formatMoney;
