
export const formatPrice = 
(amount:number) => {

    const formattedAmount = new Intl.NumberFormat ('en-IN',{
        style: 'currency',
        currency: 'NPR'
    }).format(amount)
    return formattedAmount.replace('NPR', 'Rs');
};
 
