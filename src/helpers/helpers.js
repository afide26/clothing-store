export const getFirstName = user => {
  if (user) {
    const fullName = Object.values(user)[0].displayName;
    const nameSplit = fullName.split(" ");
    return nameSplit[0];
  }
};
