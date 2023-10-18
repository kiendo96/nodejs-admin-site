const Items = require('../models/items')
const UtilsHelpers 	= require('../helpers/utils');
const ParamsHelpers 	= require('../helpers/params');

const listItems = async (req, res) => {
    
    try {
        let objWhere = {};
        let keyword = ParamsHelpers.getParam(req.query, 'keyword', '');
        let currentStatus= ParamsHelpers.getParam(req.params, 'status', 'all'); 
        //get param
        let statusFilter = await UtilsHelpers.createFilterStatus(currentStatus);

        let pagination = {
            totalItems: 1,
            totalItemsPerPage: 2,
            currentPage: 1
        }
        pagination.currentPage = parseInt(ParamsHelpers.getParam(req.query, 'page', 1))
        // console.log(pagination)
        //get current status for buttom
        if(currentStatus !== 'all') objWhere = {status: currentStatus}
        if(keyword !== '') objWhere.name = new RegExp(keyword, 'i');
        const countTotal = await Items.count(objWhere)
        pagination.totalItems = countTotal
        const items = await Items.find(objWhere).sort({ordering: 'asc'}).skip((pagination.currentPage - 1 )*pagination.totalItemsPerPage ).limit(pagination.totalItemsPerPage).exec();
        // console.log(currentStatus)
        res.render('pages/items/list', { title: 'Item List Page', items, statusFilter, currentStatus, keyword, pagination});
    } catch (error) {
        // res.status(400).json({message: "Khong the show items"})
        res.send(error)
    }
}

const createItems = async (req, res) => {
    try {
        const items = await Items(req.body).save()
        res.json(items)
    } catch (error) {
        res.status(400).json({message: "Can't create this items"})
    }
}
module.exports = {
    listItems,
    createItems
}