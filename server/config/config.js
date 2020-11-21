// =========== Puerto
process.env.PORT = process.env.PORT || 3000;


// ============ Entornos de BBDD
process.env.MODE_ENV = process.env.MODE_ENV || 'dev';

let urlDB;

if (process.env.MODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://jcepa:8OrMSHwgr68fFCQg@cluster0.vahal.mongodb.net/cafe?retryWrites=true&w=majority';
};

process.env.URLDB = urlDB;