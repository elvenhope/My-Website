import { connectToDatabase } from "../../../lib/db";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const coll = db.collection("tasksdata");

    let response = await coll.insertOne({
        task: req.body.Task
    });

    res.json(response);
};