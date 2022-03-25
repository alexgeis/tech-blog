module.exports = {
  format_date: (date) => {
    const date = new Date(date);
    console.log(date);
    console.log(date.getMonth());
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
