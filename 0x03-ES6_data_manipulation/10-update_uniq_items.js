/* eslint-disable no-unused-vars */
export default class GroceriesUpdater {
  static updateUniqueItems(groceriesMap) {
    if (!(groceriesMap instanceof Map)) {
      throw new Error('Cannot process');
    }

    for (const [key, value] of groceriesMap) {
      if (value === 1) {
        groceriesMap.set(key, 100);
      }
    }
  }
}
