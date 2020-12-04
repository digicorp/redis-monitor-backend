const common = {

    handleSuccess: (response, data, msg='', ...otherData) => {
        try {
          data = typeof data === 'string' ? { message: data } : { data }
          otherData = otherData.length ? { otherData } : undefined
          return response.send({
            ...data,
            msg,
            statusCode: 200,
            status: true,
            ...otherData
          })
        } catch (error) {
          return error
        }
    },
    
    handleError: (response, error, statusCode = 400, ...params) => {
      try {
          return response.send({
          statusCode,
          status: false,
          error:
              error.code ||
              error.sqlMessage ||
              error.message ||
              error ||
              'Something went wrong from server side.',
          otherData: params
          })
      } catch (err) {
          return err
      }
    }

}

module.exports = common