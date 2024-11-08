// app/products/[id]/page.tsx
import React from 'react';

async function fetchProduct(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function ProductDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const product = await fetchProduct(params.id);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
        </div>
    );
}
