export const getFirstName = fullName => {
  if (fullName) {
    const splitName = fullName.split(" ");
    console.log("FullName", fullName);
    return splitName[0];
  }
};
