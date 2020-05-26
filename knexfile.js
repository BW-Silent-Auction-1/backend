module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auction.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
    pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		}
  },
  testing: {
    client: 'sqlite3',
    connection: { filename: './database/auction-test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
    pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		}
  }
};
