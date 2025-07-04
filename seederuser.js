const mongoose = require('mongoose');
const User = require('./api/assignment/models/user')
const { atlasUri } = require('./api/utils/keys');

mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const usersData = [
    {
        id: '1',
        name: 'YANKINE aicha',
        email: 'yankine76@gmail.com',
        // password: '1234',
        password: '$2y$10$XeSLrnuqroN1HwyWdnPD4ecmfc2TJPA7UT.gBp1x0ABo90GB0Go2O',
        role: 'admin',
        photo: 'photos'
    },
    {
        id: '2',
        name: 'Deby ',
        email: 'deby@gmail.com',
        // password: '1234',S
        password: '$2y$10$XeSLrnuqroN1HwyWdnPD4ecmfc2TJPA7UT.gBp1x0ABo90GB0Go2O',
        role: 'user',
        photo: 'photos'
    },
];

async function seedUsers() {
    try {
        await User.deleteMany();
        await User.insertMany(usersData);
        console.log('Seeders pour les utilisateurs est exécuté avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'exécution des seeders pour les utilisateurs :', error);
    } finally {
        mongoose.disconnect();
    }
}
seedUsers();
