module.exports = ({ id, username, email, role, theme, language }) => {
  const payload = {
    id,
    username,
    email,
    role,
    theme,
    language,
  };
  return payload;
};
