import { database } from "../db.js";


function productsCollection() {

    if (!database) {
        throw new Error("Database is not connected");
    }

    return database.collection("products");

}



export async function getProducts() {

    const collection = productsCollection();


    const products = await collection
        .find(
            {},
            {
                projection: {
                    name: 1,
                    price: 1,
                    type: 1,
                    _id: 0
                }
            }
        )
        .toArray();


    return products;

}




export async function createProduct(product) {

    const collection = productsCollection();


    const result = await collection.insertOne(product);


    return result;

}




export async function createManyProducts(products) {

    const collection = productsCollection();


    const result = await collection.insertMany(products);


    return result;

}





export async function updateProduct(name, data) {

    const collection = productsCollection();


    const result = await collection.updateOne(

        { name },

        {
            $set: data
        }

    );


    return result;

}





export async function updateManyProducts(filter, data) {

    const collection = productsCollection();


    const result = await collection.updateMany(

        filter,

        {
            $set: data
        }

    );


    return result;

}





export async function replaceProduct(name, product) {

    const collection = productsCollection();


    const result = await collection.replaceOne(

        { name },

        product

    );


    return result;

}





export async function deleteProduct(name) {

    const collection = productsCollection();


    const result = await collection.deleteOne({

        name

    });


    return result;

}





export async function deleteManyProducts(filter) {

    const collection = productsCollection();


    const result = await collection.deleteMany(filter);


    return result;

}