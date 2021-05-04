// Test function
async function insertLessons(client, lessons) {
    const result = await client.db('coursework').collection('lessons').insertMany(lessons);

    console.log(`${result.insertedCount} new lesson(s) created with the following id(s): `);
    console.log(result.insertedIds);
}

// Test function
async function insertUsers(client, users) {
    const result = await client.db('coursework').collection('users').insertMany(users);

    console.log(`${result.insertedCount} new user(s) created with the following id(s): `);
    console.log(result.insertedIds);
}

await insertLessons(client, [{
    topic: 'math',
    location: 'London',
    price: 100
}, {
    topic: 'math',
    location: 'Liverpool',
    price: 80
}, {
    topic: 'math',
    location: 'Oxford',
    price: 90
}, {
    topic: 'math',
    location: 'Bristol',
    price: 120
}, ]);

await insertUsers(client, [{
    email: 'aguy@gmail.com',
    password: 'aguypassword',
}, {
    email: 'another@gmail.com',
    password: 'anotherpassword',
}, {
    email: 'your@gmail.com',
    password: 'yourpassword',
}, {
    email: 'newgirl@gmail.com',
    password: 'newgirlpassword',
}, ]);