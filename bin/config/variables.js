const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://frevoAdmin:12wqasxz@cluster0-pt8bn.mongodb.net/test?retryWrites=true'
    },
    Security:{
        secretKey: '59e5cdce3e05204d70864b7a757098e6|dac878d4fd87e8ab9985b6e2e1969586'
    }
}

module.exports = variables;