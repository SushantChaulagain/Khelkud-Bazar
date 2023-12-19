export const formatPrice = 
(amount:number) => {

    return new Intl.NumberFormat ('ne-NP',{
        style: 'currency',
        currency: 'NPR'
    }).format(amount)
};
 
