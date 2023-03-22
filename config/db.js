import sqlite3 from "sqlite3";

const Database = new sqlite3.Database("./db.db", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

export default Database;

// Query Examples

// CREATE TABLE
// Database.run("CREATE TABLE names(name text)", (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Table [names] created!");
// });

// INSERT
// Database.run("INSERT INTO names (name) VALUES (?)", ["bob"], (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("record created!\n", this);
// });

// SELECT
// Database.each("SELECT * FROM names", [], (err, row) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(row);
// });
