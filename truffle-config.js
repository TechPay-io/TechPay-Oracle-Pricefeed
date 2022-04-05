module.exports = {
    compilers: {
        solc: {
          version: '^0.5.17',
          settings: {
            optimizer: {
              enabled: true,
              runs: 5000000
            }
          }
        }
    },
    networks: {
        development: {
            host: "photonvm",
            port: 8545,
            network_id: "2569"
        },
        test: {
            host: "wsapi.test.techpay.io",
            port: 80,
            network_id: "2389"
        }
    }
};
