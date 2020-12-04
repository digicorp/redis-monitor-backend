const { request, response } = require('express');
const { common, globalMessages } = require('../../../helpers')
const  db  = require('../../../models');

const eventLogController = {
    Insert: async (request, response) => {
        try{
            await db.eventLogModel.create(request.body);
            return await common.handleSuccess(response,"", globalMessages.saved )
        }catch(error){
            return await common.handleError(response, globalMessages.somethingWentWrong, error)
        }
    },

    list: async (request, response) => {
        try{
            let res= await db.eventLogModel.findAll({});
            return common.handleSuccess(response,res)
        }catch(error){
            return common.handleError(response, globalMessages.somethingWentWrong, error)
        }
    }
}

module.exports = eventLogController