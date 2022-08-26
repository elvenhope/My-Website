import { connectToDatabase } from "../../../lib/db";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const tasks = await db
        .collection("tasksdata")
        .find({})
        .toArray();

    res.json(tasks);
};