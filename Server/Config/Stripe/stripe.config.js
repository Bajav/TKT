import Stripe from 'stripe';

// initialize stripe
export const stripe = Stripe(process.env.STRIPE_API_KEY);