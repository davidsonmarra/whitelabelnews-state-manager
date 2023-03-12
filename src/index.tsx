const getExportByBrand = () => ({
  DailyBugle: require('./DailyBugle').test as Function,
  DailyPlanet: require('./DailyPlanet').test as Function,
});

export const test = getExportByBrand()[BRAND];
