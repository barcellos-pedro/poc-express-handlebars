const helpers = {
  upperCase(value: string): string {
    return value.toUpperCase();
  },
  json(value: object): string {
    return JSON.stringify(value, null, 2);
  },
};

export default helpers;
