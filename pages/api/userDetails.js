import client from "@/utils/db";

export default async function handler(req, res) {

    const { name, email } = req.body;

  const databaseName = process.env.COSMOS_DB_NAME;
  const containerName = process.env.COSMOS_CONTAINER_NAME;

  // Define the time range query condition

  const newDocument = {
    name: name,
    email: email,
    timestamp: new Date().toISOString(),
  };

  try {
    const { resource: createdItem } = await client
      .database(databaseName)
      .container(containerName)
      .items.create(newDocument);

    // Return the created document as the response
    return res.status(201).json({
      message: "Document inserted successfully",
      data: createdItem,
    });
  } catch (error) {
    console.error("Error inserting document into Cosmos DB:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
