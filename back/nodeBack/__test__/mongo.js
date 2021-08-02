const { MongoClient, ObjectId } = require('mongodb');


const DB_NAME = "movie-world-db";
const uri = process.env.CONNECTION_STRING

const client = new MongoClient(uri, { useNewUrlParser: true });
const dbName = DB_NAME;

async function connect() {
  if (!client.isConnected()) {
    await client.connect();
    console.log('Connected succesfully to MongoDB');
  }
  return client.db(dbName);
}
function getAll(collection, query) {
  return connect().then((db) => {
    return db.collection(collection).find(query).toArray();
  });
}
function getById(collection, id) {
  return connect().then((db) => {
    return db.collection(collection).findOne({ _id: ObjectId(id) });
  });
}
function create(collection, data) {
  return connect()
    .then((db) => {
      return db.collection(collection).insertOne(data);
    })
    .then((result) => result.insertedId);
}
function createMany(collection, data) {
  return connect()
    .then((db) => {
      return db.collection(collection).insertMany(data);
    })
    .then((result) => result.insertedIds);
}
function update(collection, id, data) {
  return connect()
    .then((db) => {
      return db
        .collection(collection)
        .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    })
    .then((result) => result.upsertedId || id);
}
async function remove(collection, id) {
  const exist = await getById(collection, id);
  if (!exist) {
    throw new Error("The animal hasn't been registered");
  }
  return connect()
    .then((db) => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) });
    })
    .then(() => id);
}
function drop(collection) {
  return connect().then((db) => {
    return db.collection(collection).drop();
  });
}
const repository = {
  getAll,
  getById,
  create,
  createMany,
  update,
  remove,
  drop,
};
module.exports = repository;
