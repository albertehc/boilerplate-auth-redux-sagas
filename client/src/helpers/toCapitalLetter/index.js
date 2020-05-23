export default (string) => {
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
