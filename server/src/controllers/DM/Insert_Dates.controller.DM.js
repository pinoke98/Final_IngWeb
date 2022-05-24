import { getConnectionDM } from "../../database/connectionDM";
import sql from 'mssql'

export const insertNew_Date = async (req,res) => {

    const {Date} = req.body

    console.log(Date)

    const pool = await getConnectionDM();

    const resultsInsDate = await pool.request()
    .input("Date", sql.Date(), Date)
    .query(
        "insert into Dates (Date) values (@Date)"
    );

    res.json(resultsInsDate)

}