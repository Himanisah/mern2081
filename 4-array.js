

let courses = ["MERN", "python", "QA", "django"];
console.log(courses);

let users = [
    {
        Name: 'Ram',
        Number: 986756437,
        PermanentAddress: {
            District: 'Kathmandu',
            ward: -1,
            Province: 3
        },
        TemporaryAddress: {
            District: 'Kathmandu',
            ward: 4,
            Province: 3
        }
    },

    {
        Name: 'Shyam',
        Number: 9865563,
        PermanentAddress: {
            District: 'Dhanusha',
            ward: 5,
            Province: 2
        },
        TemporaryAddress: {
            District: 'Kathmandu',
            ward: -4,
            Province: 3
        }
    },
    {
        Name: 'Hari',
        Number: 98675646,
        PermanentAddress: {
            District: 'Bhaktapur',
            ward: 6,
            Province: 2
        },
        TemporaryAddress: {
            District: 'Kathmandu',
            ward: 7,
            Province: 3
        }

    }
];
users[0].PermanentAddress.ward = 1
users[1].TemporaryAddress.District = "New Kathmandu"
console.log(users);

let brands = [
    {
        Name: "Samsung",
        Country: "USA",
        EstablishedDate: 1976,

    },
    {
        Name: "Apple",
        Country: "China",
        EstablishedDate: 1934
    }
]

brands[0].Name = "New Samsung";
brands[1].Name = "New Apple";
console.log(brands)
