import { getConnectionDM } from "../../database/connectionDM";
import sql from 'mssql'

export const intertNew_Sale =  async (req, res) => { 

    const {Date, Chain, Postcode , Category, TotalUnits, SalePrice, CostPrice } = req.body

    console.log(req.body)

    const pool = await getConnectionDM();
    const results =  await pool.request()
    .input("Date", sql.Date(), '2022-10-11')
    .input("Chain", sql.VarChar(50), Chain)
    .input("Postcode", sql.Int(), Postcode)
    .input("Category", sql.VarChar(50), Category)
    .input("TotalUnits", sql.Int(), TotalUnits)
    .input("SalePrice", sql.Numeric(18,4), SalePrice)
    .input("CostPrice", sql.Numeric(18,4), CostPrice)
    .query(
        "insert into Fact_Sales (Date,Chain,Postcode,Category,TotalUnits,SalePrice,CostPrice) values (@Date, @Chain, @Postcode, @Category, @TotalUnits, @SalePrice, @CostPrice)"
    );

    res.json(results)

}