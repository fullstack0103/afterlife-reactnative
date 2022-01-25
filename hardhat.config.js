/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xfffed20e823eff78ae7f81cb16b574be06fd38d6facfcfe9ee0cc480141eba60","balance":"1000000000000000000000"},{"privateKey":"0x90bb7d28528f9683ff31c1893f0a078c8077208414ccc561b3d238d563efb005","balance":"1000000000000000000000"},{"privateKey":"0x0cfe0bb22b25b333f6f01acc126c6f97b22d9880785e7e50f7c033a912656ac2","balance":"1000000000000000000000"},{"privateKey":"0xb04920e18f0001571b8e4ec353b25222ead5528a64167c2b2975e8d9f3f76585","balance":"1000000000000000000000"},{"privateKey":"0xa80561075e77adf592c43aac6cf78d5b06fb8a38e1cf4e1f503187aacda03a2a","balance":"1000000000000000000000"},{"privateKey":"0x8d9891dbeb1f38f13f2c92e156a0691628f8011797cdaf1d0b4e83ff1f024ec4","balance":"1000000000000000000000"},{"privateKey":"0xbe2007a7806cc05e06bd93b0a70b50fd4dbe2f569b96be7aaa0d8fb2e4a5920f","balance":"1000000000000000000000"},{"privateKey":"0x124e64b3f93c716595338651541266a8b6f44a6ef662946241dc04781edd4b36","balance":"1000000000000000000000"},{"privateKey":"0x2476c1a6edee3cd2692006822394d63d472f045dfb0797907496b8069f1c7827","balance":"1000000000000000000000"},{"privateKey":"0x2fc9ccc257809837038c2e3d792377b55c7f55e093babe1739500ce464b1d00e","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};