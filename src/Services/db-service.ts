import {inventoryItem} from '../Utils/Types';
import {
  SQLiteDatabase,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';

const tableName = 'inventory';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'inventory.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    price REAL,
    measurement TEXT,
    barcode TEXT UNIQUE NOT NULL
  
      );`;

  await db.executeSql(query);
};

export const getInventoryItems = async (
  db: SQLiteDatabase,
): Promise<inventoryItem[]> => {
  try {
    const inventoryItems: inventoryItem[] = [];
    const results = await db.executeSql(
      `SELECT id, name, description, image, price, measurement, barcode FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        inventoryItems.push(result.rows.item(index));
      }
    });
    return inventoryItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get inventoryItems !!!');
  }
};

export const saveInventoryItems = async (
  db: SQLiteDatabase,
  inventoryItems: inventoryItem[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, name, description, image, price, measurement, barcode) values` +
    inventoryItems
      .map(
        i =>
          `(null, '${i.Nombre}', '${i.Descripcion}', '${i.Imagen}', '${i.Precio}' ,'${i.Unidad_Medida}' ,'${i.Codigo_Barras}')`,
      )
      .join(',');

  return db.executeSql(insertQuery);
};

export const deleteInventoryItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
