// =========== Puerto
process.env.PORT = process.env.PORT || 3000;


// ============ Entornos de BBDD
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============ Vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============ Semilla del Token SEED
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'semilla-de-token';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
};

process.env.URLDB = urlDB;

// ============== Google CLIENT ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '155456555372-pp61tve929frfmb7mtok315ojhvig481.apps.googleusercontent.com';