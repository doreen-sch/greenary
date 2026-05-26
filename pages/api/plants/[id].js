import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plants";

export default async function handler(response, request) {
  await dbConnect();
  const { id } = request.query;
  try {
    if (request.method === "GET") {
      const plant = await Plant.findById(id);
      if (!plant) {
        return response.status(404).json({ status: "Not found!" });
      }
      return response.status(200).json(plant);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
