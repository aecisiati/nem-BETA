require('dotenv').config();
const { Client } = require('discord.js');
const mongoose = require('mongoose');
const economy = require('../models/EconomyModel');
const ItemManager = require('./ItemManager');
const PetManager = require('./PetManager');
const JobManager = require('./JobManager');

class MongoClient extends Client {
    constructor() {
        super();
        mongoose.connect('mongodb+srv://aecisiati:Onceupon1@nem.df5le.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useUnifiedTopology : true,
            useNewUrlParser : true,
        }).then(console.log('connected to mongodb!'))
        this.economy = economy;
        this.items = new ItemManager();
        this.jobs = new JobManager();
        this.pets = new PetManager();
        this.commandsUsed = 1;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     */

    async fetchUser(userId) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
            });
            newUser.save();
            return newUser;
        }
        return user;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     * @param {number} amount - Amount of bank space to give.
     */

    async giveBankSpace(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
            });
            newUser.save();
            return newUser;
        }
        user.bankSpace += parseInt(amount);
        await user.save();
        return user;
    }

    async givePetHappy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
                
            });
            newUser.save();
            return newUser;
        }
        user.petHappy += parseInt(amount);
        await user.save();
        return user;
    }


    async rmvPetHappy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
                
            });
            newUser.save();
            return newUser;
        }
        user.petHappy -= parseInt(amount);
        await user.save();
        return user;
    }


    async resetPetHappy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
                
            });
            newUser.save();
            return newUser;
        }
        user.petHappy = 50;
        await user.save();
        return user;
    }

    async genPetHappy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                
            });
            newUser.save();
            return newUser;
        }
        user.petHappy = 100;
        await user.save();
        return user;
    }


    async givePetEnergy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                
            });
            newUser.save();
            return newUser;
        }
        user.petEnergy += parseInt(amount);
        await user.save();
        return user;
    }


    async rmvPetEnergy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                
            });
            newUser.save();
            return newUser;
        }
        user.petEnergy -= parseInt(amount);
        await user.save();
        return user;
    }


    async resetPetEnergy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                
            });
            newUser.save();
            return newUser;
        }
        user.petEnergy = 50;
        await user.save();
        return user;
    }

    async genPetEnergy(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                
            });
            newUser.save();
            return newUser;
        }
        user.petEnergy = 100;
        await user.save();
        return user;
    }


    /**
     * 
     * @param {string} userId - A discord user ID.
     */

    async createUser(userId) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) return false;
        const newUser = new economy({
            userId: userId,
            items: [],
            jobs: [],
            pets: []
        });
        newUser.save();
        return newUser;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     * @param {number} amount - Amount of coins to give.
     */

    async giveCoins(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                coinsInWallet: parseInt(amount)
            });
            newUser.save();
            return newUser;
        }
        user.coinsInWallet += parseInt(amount);
        await user.save();
        return user;
    }

    async rmvCoins(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
            });
            newUser.save();
            return newUser;
        }
        user.coinsInWallet -= parseInt(amount);
        await user.save();
        return user;
    }



    async giveTrinkets(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                trinkets: parseInt(amount)
            });
            newUser.save();
            return newUser;
        }
        user.trinkets += parseInt(amount);
        await user.save();
        return user;
    }


    async rmvTrinkets(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: [],
                trinkets: parseInt(amount)
            });
            newUser.save();
            return newUser;
        }
        user.trinkets -= parseInt(amount);
        await user.save();
        return user;
    }

    async giveJobHours(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
                
            });
            newUser.save();
            return newUser;
        }
        user.jobHours += parseInt(amount);
        await user.save();
        return user;
    }

    async rmvJobPromo(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                jobs: [],
                pets: []
                
            });
            newUser.save();
            return newUser;
        }
        user.jobPromo -= parseInt(amount);
        await user.save();
        return user;
    }

}

module.exports = MongoClient;
