const mongo = require("mongoose");
const uri =
  "mongodb+srv://dangquang:Dangquang010101@cluster0.dgejsdb.mongodb.net/api_huet?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongo.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database ");
  } catch (error) {
    console.log("Failed to connect");
  }
}

module.exports = { connect };

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://dangquang:Dangquang010101@cluster0.dgejsdb.mongodb.net/?retryWrites=true&w=majority";

// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   serverApi: ServerApiVersion.v1,
// // });

// const connectDB = async () => {
//   //   try {
//   //     await client.connect();
//   //     console.log("Connected successfully to server");
//   //   } finally {
//   //     await client.close();
//   //   }
//   try {
//     // Connect to the MongoDB cluster
//     mongo.connect(
//       uri,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => console.log(" Mongoose is connected")
//     );
//   } catch (e) {
//     console.log("could not connect");
//   }
// };

// module.exports = { connectDB };
