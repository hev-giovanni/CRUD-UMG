import { Sequelize } from "sequelize";
const db = new Sequelize('database2_app','admin','umg2023h',{
    host: 'database-umg.cyonwybhwmfd.us-west-1.rds.amazonaws.com',
    dialect:'mysql'
})
export default db