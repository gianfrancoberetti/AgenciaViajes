const  {Model, DataTypes, Sequelize} = require('sequelize');


const TESTIMONIALES_TABLE = 'Testimoniales';

const testimonialesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        allowNull: false,
        type: DataTypes.STRING
    },
    correo:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    mensaje:{
        allowNull: false,
        type: DataTypes.STRING,
    },
}

class Testimonial extends Model{
    static associate(){}

    static config(sequelize){
        return{
            sequelize,
            tableName: TESTIMONIALES_TABLE,
            modelName: 'Testimonial',
            timestamps: false,
        }
    }
}

module.exports = {TESTIMONIALES_TABLE, testimonialesSchema, Testimonial}