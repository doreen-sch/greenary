import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const plants = await Plant.find();
      return response.status(200).json(plants);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
