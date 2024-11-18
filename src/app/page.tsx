import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Next JS APP',
    description: 'Belajar Next JS',
    keywords: 'learn, next js, study club',
};

export default function HomePage() {
    // throw new Error();
    return (
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>This is the home page.</p>
        </div>
    );
}
