import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plants";

export default async function handler(response, request) {
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
