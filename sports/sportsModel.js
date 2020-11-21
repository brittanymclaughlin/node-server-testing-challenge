const db = require('../data/dbConfig.js');


function find(){
    return db('sports');
}

async function findById(id){
    const sport = await db('sports')
    .where({id})
    .first()
    return sport
}

async function add(sport){
    const [id] = await db('sports').insert(sport);
    return findById(id);
}

async function update(changes, id) {
    const count = await db('sports')
        .where({ id })
        .update(changes)

    return count ? findById(id) : undefined;
}

async function remove(id){
   const sport = await findById(id)
   
   const count = await db('sports')
   .where({id})
   .del();
   return count ? sport : undefined;
}


module.exports = {
    add,
    remove,
    find,
    update,
    findById,
  };