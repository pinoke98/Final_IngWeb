import { getConnectionDM } from "../database/connectionDM";

export const getPastel = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('Select Chain,SUM(Sales) as Sales from Fact_Sales group by Chain')
    res.json(results.recordsets[0])

};