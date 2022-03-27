import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import restaurantesDAO from "./dao/restaurantesDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

MongoClient.connect(process.env.REST_REVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await restaurantesDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`escuchando el puerto ${port}`);
    });
  });
