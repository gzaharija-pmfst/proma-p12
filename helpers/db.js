import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("lokacije.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trObj) => {
      trObj.executeSql(
        "CREATE TABLE IF NOT EXISTS lokacije (id INTEGER PRIMARY KEY NOT NULL, naziv TEXT NOT NULL, uriSlike TEXT NOT NULL, adresa TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertLokacije = (naziv, uriSlike, adresa, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trObj) => {
      trObj.executeSql(
        "INSERT INTO lokacije (naziv, uriSlike, adresa, lat, lng) VALUES (?, ?, ?, ?, ?)",
        [naziv, uriSlike, adresa, lat, lng],
        (_, rezultat) => {
          resolve(rezultat);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const dohvatiLokacije = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trObj) => {
      trObj.executeSql(
        'SELECT * FROM lokacije',
        [],
        (_, rezultat) => {
          resolve(rezultat);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;  
}
