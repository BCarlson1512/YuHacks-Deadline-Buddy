// seed data
const data = {
    users: [
        {
            name: "testUser1",
            email: "test@example.com",
            password: "1234",
        }
    ],
    tasks: [
        {
            name: "Finish Hackathon",
            type: "Deadline",
            description: "Finish Project for YU hacks 2021",
            priority: 26,
            isComplete: false,
        },
        {
            name: "Chill out",
            type: "Misc task",
            description: "Enjoy a nice break over reading week",
            priority: 27,
            isComplete: false,
        }
    ],
}

export default data;