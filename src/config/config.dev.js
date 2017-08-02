import Bitcoin from 'bitcoinjs-lib'

export default {
  ROOT_URL: 'https://explorer.staging.blockchain.info/',
  API_BLOCKCHAIN_INFO: 'https://api.staging.blockchain.info/',
  API_CODE: '1770d5d9-bcea-4d28-ad21-6cbd5be018a8',
  BLOCKCHAIN_DATA_PATH: 'data',
  WALLET_IMMUTABLE_PATH: 'payload',
  SETTINGS_PATH: 'settings',
  NETWORK: Bitcoin.networks.bitcoin
}
