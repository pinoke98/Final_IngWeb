import { getConnectionDM } from "../../database/connectionDM";

export const getFact_Sales = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('Select * from Fact_Sales')
    res.json(results)

};