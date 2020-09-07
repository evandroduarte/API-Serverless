const { ObjectID } = require('mongodb'); //converte a string para id do banco
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const { id } = req.params;

    const {client: MongoClient, closeConnectionFn } = await createMongoClient();

    const Products = MongoClient.collection('products');

    const res = await Products.findOne({ _id: ObjectID(id)}); //especifica o id do banco (_id) sendo igual ao id convertido em ObjectID

    closeConnectionFn();
    context.res = {
        status: 200,
        body: res
    }
};