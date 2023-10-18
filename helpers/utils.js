const Items = require('../models/items')


let createFilterStatus =  async (currentStatus) => {
    const statusFilter = [
        {name: 'All',valueStatus: 'all', count: 1, link: '#', class: 'default'},
        {name: 'Active',valueStatus: 'active', count: 2, link: '#', class: 'default'},
        {name: 'InActive',valueStatus: 'inactive', count: 3, link: '#', class: 'default'}
    ]

	for(const item in statusFilter){
        let condition = {};
        if(statusFilter[item].valueStatus !== 'all' ) condition = { status: statusFilter[item].valueStatus}
        if(statusFilter[item].valueStatus === currentStatus) statusFilter[item].class = 'success'
        const countItems = await Items.countDocuments(condition);
        statusFilter[item].count = countItems
    }

    return statusFilter;
}

module.exports = {
    createFilterStatus: createFilterStatus
}