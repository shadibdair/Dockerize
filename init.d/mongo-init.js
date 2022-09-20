db.createUser(
    {
        user: "admin-devops",
        pwd: "password-devops",
        roles: [
            {
                role: "readWrite",
                db: "newdbadmin"
            }
        ]
    }
);


// If need to create admin user
// db.createUser(
//     {
//         user: "admin",
//         pwd: "admin",
//         roles: [
//           { role: "userAdminAnyDatabase", db: "admin" },
//           { role: "readWrite", db: "admin" }
//         ]
//     });