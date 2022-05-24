import { getConnectionDM } from "../database/connectionDM";

export const getStackBarras = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('select	fs.Sales, fs.Chain, fs.Category from Retail_Analysis.dbo.Fact_Sales as fs')
    res.json(results.recordsets[0])

};