

const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("staff mom galaxy romance size stock volcano road suspect author office resist",
        "https://rinkeby.infura.io/v3/07ab0af55b184a5ba4fba8c8ae6f08d5")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};