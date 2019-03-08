const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://frevoAdmin:12wqasxz@cluster0-pt8bn.mongodb.net/test?retryWrites=true'
    }
}

module.exports = variables;