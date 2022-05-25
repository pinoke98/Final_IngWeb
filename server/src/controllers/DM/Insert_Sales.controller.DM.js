import { getConnectionDM } from "../../database/connectionDM";
import sql from 'mssql'

export const intertNew_Sale =  async (req, res) => { 

    const {Date, Chain, Category, TotalUnits, SalePrice, CostPrice } = req.body
    const Postcode = 3066;

    const Sales = parseInt(SalePrice)*parseInt(TotalUnits)
    const Costs = parseInt(CostPrice)*parseInt(TotalUnits)
    const GrossProfit = Sales - Costs

    console.log(Date, Chain, Postcode)

    const pool = await getConnectionDM();


    const resultsInsFact =  await pool.request()
    .input("Date", sql.Date(), Date)
    .input("Chain", sql.VarChar(50), Chain)
    .input("Postcode", sql.Int(), Postcode)
    .input("Category", sql.VarChar(50), Category)
    .input("TotalUnits", sql.Int(), TotalUnits)
    .input("SalePrice", sql.Numeric(18,4), SalePrice)
    .input("CostPrice", sql.Numeric(18,4), CostPrice)
    .input("Sales", sql.Numeric(18,4), Sales)
    .input("Costs", sql.Numeric(18,4), Costs)
    .input("GrossProfit", sql.Numeric(18,4),GrossProfit)
    .query(
        "insert into Fact_Sales (Date,Chain,Postcode,Category,TotalUnits,SalePrice,CostPrice,Sales,Costs,GrossProfit) values (@Date, @Chain, @Postcode, @Category, @TotalUnits, @SalePrice, @CostPrice, @Sales, @Costs, @GrossProfit)"
    );

    res.json(resultsInsFact)

}