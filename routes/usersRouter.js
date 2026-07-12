import express from "express";
import { getUsers } from "../services/usersService.js";

export const usersRouter = express.Router();


usersRouter.get("/users", async (req, res) => {

    const users = await getUsers();


    let content = "";

    users.forEach(user => {

        content += `
            <div>
                <h2>${user.name}</h2>
                <p>${user.email}</p>
            </div>
            <hr>
        `;

    });


    res.send(`
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Users</title>
        </head>

        <body>

            <h1>Users from MongoDB</h1>

            ${content}

            <a href="/">Home</a>

        </body>

        </html>
    `);

});