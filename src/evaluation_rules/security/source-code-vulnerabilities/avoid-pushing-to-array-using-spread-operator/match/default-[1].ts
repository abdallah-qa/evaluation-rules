type User = { id: number; name: string };

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const newUsers: User[] = [
    { id: 3, name: "Charlie" },
    { id: 4, name: "Dana" }
];

users.push(...newUsers);