"use client"    

import { useRouter } from 'next/navigation'; 
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

const ChcekOutClient = () => {
    const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter(); 
    const[clientSecret, setClientSecret] = useState('');

    console.log("paymentIntent", paymentIntent);
    console.log("clientSecret", clientSecret);

    useEffect(() => {
        // Create a payment intent as soon as the page loads
        if (cartProducts) {
            setLoading(true);
            setError(false);

            fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cartProducts,
                    payment_intent_id: paymentIntent
                })
            }).then((res) => { 
                setLoading(false);
                if (res.status === 401) {
                    return router.push('/login'); 
                }
                return res.json(); 
            }).then((data) => {
                setClientSecret(data.paymentIntent.client_secret)
                handleSetPaymentIntent(data.paymentIntent.id)
            }).catch((error) => {
                setError(true);
                toast.error('something went wrong');
            });  
        }
    }, [cartProducts, paymentIntent]); 

    return ( <>Checkout</> );
}

export default ChcekOutClient;
