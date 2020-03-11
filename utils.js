module.exports = {
  errorHanlder: err => {
    // .catch((err) => errHandler(res, err))
    // ===
    // .catch(errHandler.bind(null, res));
    console.log(`An error has occured: ${err}`);
  },
  serverErrorHandler: (res, err) => {
    console.warn(`Error: ${err}`);
    res.sendStatus(500);
  }
};
