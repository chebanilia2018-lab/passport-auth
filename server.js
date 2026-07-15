import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { connectDatabase } from "./db.js";
import { usersRouter } from "./routes/usersRouter.js";
import { productsRouter } from "./routes/productsRouter.js";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;


const users = [];




app.use(express.json());



app.use(express.urlencoded({ extended: true }));




app.use(usersRouter);

app.use(productsRouter);






app.use(
    session({

        secret: process.env.SECRET_KEY,

        resave: false,

        saveUninitialized: false,

        cookie: {

            httpOnly: true,

            secure: false,

            sameSite: "lax",

            maxAge: 1000 * 60 * 60 * 24

        }

    })
);




// Passport

app.use(passport.initialize());

app.use(passport.session());





passport.use(

    new LocalStrategy(

        { usernameField: "email" },


        async (email, password, done) => {


            try {


                const user = users.find(
                    u => u.email === email
                );


                if (!user) {

                    return done(null, false);

                }



                const passwordCheck = await bcrypt.compare(

                    password,

                    user.password

                );



                if (!passwordCheck) {

                    return done(null, false);

                }



                return done(null, user);



            } catch (error) {


                return done(error);


            }


        }

    )

);






passport.serializeUser((user, done) => {


    done(null, user.email);


});





passport.deserializeUser((email, done) => {


    const user = users.find(

        u => u.email === email

    );



    if (!user) {


        return done(null, false);


    }



    done(null, user);


});







function page(title, content) {


    return `

    <!DOCTYPE html>

    <html>


    <head>

        <meta charset="UTF-8">

        <title>${title}</title>

    </head>


    <body>


        <h1>${title}</h1>


        ${content}


    </body>


    </html>

    `;


}








app.get("/", (req, res) => {


    res.send(

        page(

            "Home",

            `

            <a href="/register">Register</a><br>

            <a href="/login">Login</a><br>

            <a href="/protected">Protected</a><br>

            <a href="/users">Users from MongoDB</a><br>

            <a href="/products">Products from MongoDB</a>

            `

        )

    );


});








app.get("/register", (req, res) => {


    res.send(

        page(

            "Register",

            `

            <form method="POST" action="/register">


                <input 

                name="email"

                type="email"

                placeholder="email"

                required />



                <input

                name="password"

                type="password"

                placeholder="password"

                required />



                <button>Register</button>


            </form>

            `

        )

    );


});








app.get("/login", (req, res) => {


    res.send(

        page(

            "Login",

            `

            <form method="POST" action="/login">


                <input

                name="email"

                type="email"

                required />



                <input

                name="password"

                type="password"

                required />



                <button>Login</button>


            </form>

            `

        )

    );


});








app.post("/register", async (req, res) => {


    const { email, password } = req.body;



    const exists = users.find(

        u => u.email === email

    );



    if (exists) {


        return res.send(

            "User already exists"

        );


    }



    const hash = await bcrypt.hash(

        password,

        10

    );



    users.push({

        email,

        password: hash

    });



    res.send(

        "Registration completed successfully. <a href='/login'>Login</a>"

    );


});









app.post(

    "/login",


    passport.authenticate(

        "local",

        {

            failureRedirect: "/login"

        }

    ),



    (req, res) => {


        res.redirect("/protected");


    }


);









function checkAuth(req, res, next) {


    if (req.isAuthenticated()) {


        return next();


    }



    res.redirect("/login");


}









app.get("/protected", checkAuth, (req, res) => {


    res.send(

        page(

            "Protected",

            `

            <p>Welcome: ${req.user.email}</p>


            <a href="/logout">Logout</a>

            `

        )

    );


});








app.get("/logout", (req, res) => {


    req.logout(() => {


        res.redirect("/");


    });


});




<<<<<<< HEAD





=======
>>>>>>> 34535a5d340bb02df842e112928bb937944b3b51

async function startServer() {


    try {


        await connectDatabase();



        app.listen(PORT, () => {


            console.log(

                `Server started on http://localhost:${PORT}`

            );


        });



    } catch (error) {


        console.log(

            "Database connection error"

        );


        console.log(error);


    }


}


<<<<<<< HEAD




startServer();
=======
startServer();
>>>>>>> 34535a5d340bb02df842e112928bb937944b3b51
