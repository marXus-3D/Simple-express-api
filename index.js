import ReviewsDAO from "./dao/reviewsDAO.js";
import dotenv from "dotenv";
import app from "./server.js";
import mongodb from "mongodb";

dotenv.config();

console.log(process.env.DATABASE_URL);
console.log(process.env.MUSERNAME);
console.log(process.env.PASSWORD);

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://${process.env.MUSERNAME}:${process.env.PASSWORD}@cluster0.hb4lvyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = 8000;

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    writeConcern: 1,
  }
)
.catch(err => {
  console.error(err.stack);
  process.exit(1);
})
.then(async client => {
  ReviewsDAO.injectDB(client);
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});

/* const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  app.get('/hello', (req, res) => {
    res.send({
        "objects": [
          { "id": 1, "item": "Lise with a Parasol", "artist": "Pierre Auguste Renoir", "collection":"Museum Folkwang, Essen, Germany", "date":"1867"},
          { "id": 2, "item": "The Theatre Box", "artist": "Pierre Auguste Renoir", "collection":"Courtauld Gallery, London, England", "date":"1874"},
          { "id": 3, "item": "Dance in the City", "artist": "Pierre Auguste Renoir", "collection":"Musée d'Orsay, Paris, France", "date":"1883"},
          { "id": 4, "item": "Dance at Bougival", "artist": "Pierre Auguste Renoir", "collection":"Musée d'Orsay, Paris, France", "date":"1883"}
        ]
      });
    //res.send('Hello World from your API!');
  }); */