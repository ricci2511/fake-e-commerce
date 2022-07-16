const EURO_FORMATER = Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
});

export const formatPrice = (price) => EURO_FORMATER.format(price);
