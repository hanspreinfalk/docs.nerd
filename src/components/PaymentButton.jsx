"use client";

import { useState } from 'react';
import getStripe from '@/lib/stripe';

export default function PaymentButton({ 
  amount, 
  productName, 
  productDescription, 
  currency = 'usd',
  className = '',
  children 
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Crear la sesión de checkout
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          productName,
          productDescription,
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Redirigir a Stripe Checkout
      const stripe = await getStripe();
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Error al procesar el pago: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`
        flex items-center justify-center space-x-2 
        bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 
        text-white font-medium py-2 px-4 rounded-lg transition-colors
        ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Procesando...</span>
        </>
      ) : (
        children || `Pagar $${amount}`
      )}
    </button>
  );
}