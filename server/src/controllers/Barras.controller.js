import { getConnectionDM } from "../database/connectionDM";

export const getBarras = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('select	fs.Sales,m.Manager,r.State from Retail_Analysis.dbo.Fact_Sales as fs inner join Retail_Analysis.dbo.Managers as m on m.Postcode = fs.Postcode inner join Retail_Analysis.dbo.Regions as r on r.Suburb = m.Suburb')
    res.json(results.recordsets[0])

};