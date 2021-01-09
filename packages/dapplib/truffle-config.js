require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food maid release still essay grace ghost army ghost'; 
let testAccounts = [
"0x56394d540dae9cabe3d3266722f1c16d98ea5e8254c40040d8c26d8700fd8cf7",
"0x22dcc30dab332331a097cf35d5dc827efd718f17a2bbf5b5cad056e4157589ad",
"0x8300a6cfaaa8c525da5c0f17cbcc412e1e37c59dbaf6cd0a277bdd9ab68aa15a",
"0xa7dfa8257d6afa9b5188088f7fcdf049cedd8a9f1ce226ea53ca414f7516ed4f",
"0x66291fbfcad1d539894b2213f9d36819654fa8ce6cca4fe99d9a50917239d517",
"0xd91b23c40e70babefb366fe05af5f5bf46e69538b52f45410dd24bef7ad36b22",
"0x374cc0db510dd2aabce868c604e3ba8948c98de5826f58b7991b15c05caba397",
"0x4d75685aff66e9d430761eae32c085e4deecdac81d137c896bbdee1d3661d90c",
"0xc40c63dc675804621aa8652de6e0062652f419c87aca2fc9e259c0ddf37086b0",
"0x57582568a3567ba0d3b8dbf57a45db4ae5ba7cf178669616abea8fddb41db5cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
