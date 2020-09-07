const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const {client: MongoClient, closeConnectionFn } = await createMongoClient();

    const product = req.body;
    
    const Products = MongoClient.collection('products');

    const res = Products.insert(product);

    closeConnectionFn();
    context.res = {
        status: 201, //Status 201 = created
        body: res
    }
};