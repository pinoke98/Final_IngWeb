import { getConnectionDM } from "../database/connectionDM";

export const getPastel = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('SELECT	Chain, Sales FROM Retail_Analysis.dbo.Fact_Sales')
    res.json(results.recordsets[0])

};