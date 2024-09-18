const { CosmosClient } = require("@azure/cosmos");

const cosmosDbConnectionString = process.env.COSMOS_DB_CONNECTION_STRING;
 
const client = new CosmosClient(cosmosDbConnectionString);
 
module.exports = client;