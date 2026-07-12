import { database } from "../db.js";


export async function getUsers() {

    const usersCollection = database.collection("users");


    const users = await usersCollection
        .find({})
        .toArray();


    return users;

}