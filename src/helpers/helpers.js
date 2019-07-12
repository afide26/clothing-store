export const getFirstName = fullName => {
  if (fullName) {
    const splitName = fullName.split(" ");
    return splitName[0];
  }
};
