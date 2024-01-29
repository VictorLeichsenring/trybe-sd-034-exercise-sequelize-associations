module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
  'Patient',
  {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, field: 'patient_id' },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'patients',
  },
);

Patient.associate = (models) => {
  Patient.belongsTo(models.Plan, { foreignKey: 'planId', as: 'plan' });
};

  return Patient;
};
