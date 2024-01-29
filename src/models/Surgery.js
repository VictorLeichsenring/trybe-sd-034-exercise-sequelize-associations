module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
  'Surgery',
  {
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true, field: 'surgery_id' },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Surgeries',
  },
);

  return Surgery;
};
