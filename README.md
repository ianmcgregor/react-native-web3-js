# react-native-web3-js

Web3.js for React Native (v1.0.0-beta.34)

## Installation

```shell
yarn add react-native-web3-js
```

## Usage

```javascript
import Web3, {Web3EthPersonal} from 'react-native-web3-js';

const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

const block = web3.eth.getBlock('latest');

console.log(block);

const personal = new Web3EthPersonal(PROVIDER);

const accounts = await personal.getAccounts();

console.log(accounts);
```
