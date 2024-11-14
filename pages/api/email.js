import client from "@/utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const databaseName = process.env.COSMOS_DB_NAME;
  const containerName = process.env.COSMOS_CONTAINER_NAME_MAIL;

  const newDocument = {
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
      message: "Email registered successfully",
      data: createdItem,
    });
  } catch (error) {
    console.error("Error inserting document into Cosmos DB:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

