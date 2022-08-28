import axios from "axios";

export default async (req, res) => {
    let response = await axios.get("https://api.edamam.com/api/recipes/v2", {
        params: {
            app_id: process.env.APP_ID,
            app_key: process.env.APP_KEY,
            q: req.body.params.query,
            type: 'public'
        }
    }).then((response) => {
        res.status(200).json(response.data);
    });
};