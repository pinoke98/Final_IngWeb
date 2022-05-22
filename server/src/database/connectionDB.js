import sql from 'mssql'

const dbSetting = {
    user: "Jorge",
    password: "pinomario98",
    server: "localhost",
    database: "Venta",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnectionDB () {
    try {
        const pool = await sql.connect(dbSetting)
        return pool
    } catch (error) {
        console.log(error)
    }
}

getConnectionDB()