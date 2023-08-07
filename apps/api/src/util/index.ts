export const isStringGuard = (x: string | string[]): x is string => {
  return typeof x === 'string';
};
