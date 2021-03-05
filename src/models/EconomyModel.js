const mongoose = require('mongoose');

const EconomySchema = new mongoose.Schema({
    userId: { type: String, required: false },
    coinsInWallet: { type: Number, required: false, default: 100 },
    coinsInBank: { type: Number, required: false, default: 500 },
    bankSpace: { type: Number, required: false, default: 500 },
    items: { type: Array, required: false, default: [] },
    dailyStreak: { type: Date, required: false, default: new Date(Date.now() - 86400000) },
    workStreak: { type: Date, required: false, default: new Date(Date.now() - 1800000) },
    passive: { type: Boolean, required: false, default: false },
    pets: { type: Array, required: false, default: [] },
    petHappy: { type: Number, required: false, default: 50 },
    petEnergy: { type: Number, required: false, default: 50 },
    trinkets: { type: Number, required: false, default: 10 },
    jobs: { type: Array, required: false, default: [] },
    jobHours: { type: Number, required: false, default: 0 },
    jobPromo: { type: Number, required: false, default: 0 },
    fired: { type: Date, required: false, default: new Date(Date.now() - 1800000) }
});

module.exports = mongoose.model('economy', EconomySchema);
