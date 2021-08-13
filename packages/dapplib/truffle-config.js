require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note oval unit gesture forum equal gate'; 
let testAccounts = [
"0x3e06306456a21d201888adf82148a9c30c8ebb3a11091824cc8ed2044d028c5e",
"0xec1a24ce16c7dfd436e6e35e3e5e7463673e6c5a7f4821de79f21a8d3249153f",
"0xc29ef9a420a3de19d852f76a260d400e481d9ed36593c405983a5bf24a17c5c2",
"0x73f8858bec60f1e313abd6317e37ed349c680f52a2d41f22f1158fb09814b7b7",
"0x0f94f5e4593e0255f8912612df8723abdd1b91ab4d776d2925439bbfddbb2826",
"0x55cf46364e40773fa3ded456c90de397ded11da78caffcf3669fd956155fd99b",
"0xfcf52adb2372a3c07135a612525006aa06aba6bced277ac722a9bec55eecd1a3",
"0xa40df99231852e8efa0eab732088cfe5e9b379232a7d897900d203d05bea5d07",
"0x61c57fda18f77455e1dc8e4a6829ed86050de6422d574dc49966e0f462f34ad3",
"0x45405c9bdfbda1696db1439f36d47ab3923e0633f30b14cbc5b0fac5baab4ff7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

