import { getConnectionDM } from "../database/connectionDM";

export const getBarrasDobles = async (req,res) => {

    const pool = await  getConnectionDM()
    const results = await pool.request().query('select	SUM(fs.Sales) as Sales,fs.Chain,r.State from Retail_Analysis.dbo.Fact_Sales as fs inner join Retail_Analysis.dbo.Managers as m on m.Postcode = fs.Postcode inner join Retail_Analysis.dbo.Regions as r on r.Suburb = m.Suburb group by fs.Chain,r.State order by r.State')
    res.json(results.recordsets[0])

};