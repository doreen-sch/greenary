import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const plants = await Plant.find().sort({ createdAt: -1 });
      return response.status(200).json(plants);
    }

    if (request.method === "POST") {
      const plantData = request.body;
      await Plant.create(plantData);
      return response.status(201).json({ status: "Plant created" });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
