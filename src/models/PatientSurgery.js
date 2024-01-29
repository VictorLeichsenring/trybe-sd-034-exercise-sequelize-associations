module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {
      patientId: { type: DataTypes.INTEGER, primaryKey: true, field: 'patient_id' },
      surgeryId: { type: DataTypes.INTEGER, primaryKey: true, field: 'surgery_id' },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Patient_surgeries'
    },
  );

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
  }
  return PatientSurgery;
};
