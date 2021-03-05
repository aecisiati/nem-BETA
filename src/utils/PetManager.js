const pets = require('./pets');

class PetManager {
    contructor() {
        this.pets = pets;
    }
    
    find(pet = '') {
        const found = pets.find(x => x.name === pet);
        if (!found) return false;
        return found;
    }

    usable(pet = '') {
        const found = pets.find(x => x.name === pet);
        if (!found) return false;
        return true; 
    }

    list() {
        return pets;
    }
}

module.exports = PetManager;   