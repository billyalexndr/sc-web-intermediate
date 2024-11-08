export default async function ProfilePage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
}
