const { common, globalMessages, redisClient } = require('../../../helpers')

const InfoController = {

    redisInfo: async (request, response) => {
        try{
            redisClient.INFO((err, res) => {
                if(err){
                    return common.handleError(response, globalMessages.somethingWentWrong, error)
                }else{
                    let data = {};
                    let splitString = res.split("#");
                    for(var i=0 ; i < splitString.length ; i++){
                        if(splitString[i]!== '')
                        {  
                            let finalSplitString = splitString[i].split("\r\n")

                            for(var j=1 ; j < finalSplitString.length ; j++){
                                if(finalSplitString[j].split(':').length === 2){
                                    data[finalSplitString[j].split(':')[0]]=finalSplitString[j].split(':')[1]
                                }

                            }
                        }

                    }
                    return common.handleSuccess(response, data)
                }
            });
        }catch(error){
            return common.handleError(response, globalMessages.somethingWentWrong, error)
        }
    }
}

module.exports = InfoController