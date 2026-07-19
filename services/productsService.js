import { database } from "../db.js";


function productsCollection() {

    if (!database) {
        throw new Error("Database is not connected");
    }

    return database.collection("products");

}






export async function getProducts(page = 1, limit = 5) {


    const collection = productsCollection();


    const skip = (page - 1) * limit;



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
        .sort({
            name: 1
        })
        .skip(skip)
        .limit(limit)
        .toArray();



    const totalProducts = await collection.countDocuments();



    return {

        totalProducts,

        currentPage: page,

        pageSize: limit,

        products

    };


}










export async function getProductsStatistics() {


    const collection = productsCollection();



    const result = await collection.aggregate([


        {
            $group: {

                _id: "$type",

                totalProducts: {
                    $sum: 1
                },

                averagePrice: {
                    $avg: "$price"
                }

            }

        },


        {
            $sort: {

                totalProducts: -1

            }

        }


    ]).toArray();



    return result;


}











export async function getProductsCursor(){


    const collection = productsCollection();



    const cursor = collection.find({});



    const products = [];



    while(await cursor.hasNext()){


        const product = await cursor.next();


        products.push(product);


    }



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
