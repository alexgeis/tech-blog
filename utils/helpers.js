module.exports = {
  format_date: (date) => {
    // const date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
