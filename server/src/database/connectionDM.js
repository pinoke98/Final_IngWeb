import sql from 'mssql'

const dbSetting = {
    user: "Jorge",
    password: "pinomario98",
    server: "localhost",
    database: "Retail_Analysis",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnectionDM () {
    try {
        const pool = await sql.connect(dbSetting)
        return pool
    } catch (error) {
        console.log(error)
    }
}
