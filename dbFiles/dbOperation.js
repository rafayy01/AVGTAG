const config = require('./dbConfig'),
sql = require('mssql');

const getinitialData = async(firstname) => {
    try {
        let pool = await sql.connect(config);
        // let Data = pool.request().query(`select [ENTRY _POINT1] from [dbo].['Data File$']`)
        let Data = pool.request().query(`select [ENTRY_POINT1], [RoutePoint], [EXIT_POINT1], [DistanceNm], ROUND([Distance_km],0) AS [Distance_km] from [dbo].['Data File$']`)
        console.log('CONNECTED')
        console.log(Data);
        return Data;

    }
    catch(error) {
        console.log('NOT CONNECTED')
        console.log(error);
    }
}
module.exports = {
    getinitialData
}