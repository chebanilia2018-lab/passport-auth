import express from "express";

import {
    getProducts,
    getProductsStatistics,
    getProductsCursor,
    createProduct,
    createManyProducts,
    updateProduct,
    updateManyProducts,
    replaceProduct,
    deleteProduct,
    deleteManyProducts
} from "../services/productsService.js";


export const productsRouter = express.Router();








productsRouter.get("/products", async (req, res) => {

    try {


        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 5;



        const result = await getProducts(
            page,
            limit
        );


        res.json(result);



    } catch (error) {


        console.log(error);


        res.status(500).json({

            message: "Cannot get products",

            error: error.message

        });


    }

});









productsRouter.get("/products/statistics", async (req, res) => {


    try {


        const result = await getProductsStatistics();


        res.json(result);



    } catch (error) {


        console.log(error);


        res.status(500).json({

            message: "Cannot get statistics",

            error: error.message

        });


    }


});











productsRouter.get("/products/cursor", async (req, res) => {


    try {


        const result = await getProductsCursor();


        res.json(result);



    } catch (error) {


        console.log(error);


        res.status(500).json({

            message: "Cannot get products with cursor",

            error: error.message

        });


    }


});









productsRouter.post("/products", async (req, res) => {


    try {


        console.log("BODY FROM POSTMAN:");
        console.log(req.body);



        if (!req.body || Object.keys(req.body).length === 0) {


            return res.status(400).json({

                message: "Request body is empty"

            });


        }




        const result = await createProduct(req.body);



        res.json(result);




    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot create product",

            error: error.message

        });



    }



});









productsRouter.post("/products/many", async (req, res) => {


    try {


        const result = await createManyProducts(req.body);



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot create products",

            error: error.message

        });



    }


});









productsRouter.put("/products/:name", async (req, res) => {


    try {


        const result = await updateProduct(

            req.params.name,

            req.body

        );



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot update product",

            error: error.message

        });



    }


});









productsRouter.put("/products", async (req, res) => {


    try {


        const result = await updateManyProducts(

            req.body.filter,

            req.body.data

        );



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot update products",

            error: error.message

        });



    }


});









productsRouter.patch("/products/:name", async (req, res) => {


    try {


        const result = await replaceProduct(

            req.params.name,

            req.body

        );



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot replace product",

            error: error.message

        });



    }


});









productsRouter.delete("/products/:name", async (req, res) => {


    try {


        const result = await deleteProduct(

            req.params.name

        );



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot delete product",

            error: error.message

        });



    }


});









productsRouter.delete("/products", async (req, res) => {


    try {


        const result = await deleteManyProducts(

            req.body

        );



        res.json(result);



    } catch (error) {



        console.log(error);



        res.status(500).json({

            message: "Cannot delete products",

            error: error.message

        });



    }


});
