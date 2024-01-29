module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
  'Plan',
  {
    planId: { type: DataTypes.INTEGER, primaryKey: true, field: 'plan_id' },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
    underscored: true,
  },
);

  return Plan;
};
