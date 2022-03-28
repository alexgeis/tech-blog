module.exports = {
  format_date: (date) => {
    // const dateNew = new Date(date);
    // console.log(date);
    // console.log(date.getMonth());
    // return `${
    //   dateNew.getMonth() + 1
    // }/${dateNew.getDate()}/${dateNew.getFullYear()}`;
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
