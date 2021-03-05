const jobs = require('./jobs');

class JobManager {
    contructor() {
        this.jobs = jobs;
    }
    
    find(job = '') {
        const found = jobs.find(x => x.name === job);
        if (!found) return false;
        return found;
    }

    usable(job = '') {
        const found = jobs.find(x => x.name === job);
        if (!found) return false;
        return true; 
    }

    list() {
        return jobs;
    }
}

module.exports = JobManager;   