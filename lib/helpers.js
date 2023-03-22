const helpers = {
  upperCase(value) {
    if (typeof value !== "string") {
      return value;
    }

    return value.toUpperCase();
  },
  json(value) {
    return JSON.stringify(value, null, 2);
  },
};

export default helpers;
