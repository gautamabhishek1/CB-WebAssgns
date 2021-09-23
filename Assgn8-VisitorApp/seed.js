const Visitor = require('./models/visitor');

const visitors = [
    {
        name: 'Abhishek',
        phone: 9887687877,
        email: 'test1@ex.com'
    },
    {
        name: 'Person 2',
        phone: 8796786785,
        email: "test2@ex.com"
    },

];

const seedDb = async()=>{
    await Visitor.deleteMany({});
    await Visitor.insertMany(visitors);
    console.log('DB seeded');
}

module.exports = seedDb;