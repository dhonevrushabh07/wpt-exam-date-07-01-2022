const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "CDAC",
};

async function checkConnection() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  console.log("connection established");

  await connection.endAsync();
}
//checkConnection();

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `INSERT INTO mychat values(?)`;
  await connection.queryAsync(sql, [user.msg]);
  console.log("Record Added");

  await connection.endAsync();
};

// const user = {
//   msg: "hii Vrushabh How are you??",
// };
// addUser(user);

module.exports = { addUser };
