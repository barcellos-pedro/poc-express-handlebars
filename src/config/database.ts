import sqlite3, { Database } from "sqlite3";

const db: Database = new sqlite3.Database("./db.db", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

export default db;

// Query Examples

// CREATE TABLE
// db.run("CREATE TABLE names(name text)", (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Table [names] created!");
// });

// INSERT
// db.run("INSERT INTO names (name) VALUES (?)", ["jack"], (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("record created!");
// });

// SELECT
// db.each("SELECT * FROM names", [], (err, row) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(row);
// });
