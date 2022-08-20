import conn from '../../../lib/db'

export default async (req, res) => {
  try {
    const query = 'INSERT INTO "Todos"."todolist" ("Task") VALUES($1)'
    const values = [req.body.Task]
    const result = await conn.query(
      query,
      values
    );
    res.status(200).json({success: true})
  } catch (error) {
    console.log(error);
  }


};