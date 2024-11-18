'use client';
import React from 'react';

export default function HomePage() {
    return (
        <div>
            {/* <h1>Welcome to Our Website</h1> */}
            <h1>{process.env.NEXT_PUBLIC_GREETING}</h1>
            <p>Explore our products and services.</p>
        </div>
    );
}
