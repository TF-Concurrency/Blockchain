const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

const myWalletAddress = myKey.getPublic('hex');

const ctorre = new Blockchain();

ctorre.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 72901831);
tx1.signTransaction(myKey);
ctorre.addTransaction(tx1);

ctorre.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 13472836);
tx2.signTransaction(myKey);
ctorre.addTransaction(tx2);

ctorre.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${ctorre.getBalanceOfAddress(myWalletAddress)}`);


console.log();
console.log('Blockchain valid?', ctorre.isChainValid() ? 'Yes' : 'No');
