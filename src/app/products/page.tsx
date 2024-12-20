import React from 'react';
import Link from 'next/link';

async function fetchProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        next: { revalidate: 30 },
    });
    return res.json();
}

export default async function ProductsPage() {
    const products = await fetchProducts();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
