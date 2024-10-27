const tokens = [
    {
        "name": "Polygon Ecosystem Token",
        "symbol": "POL",
        "decimals": 18,
        "address": "0x0000000000000000000000000000000000000000",
        "icon": "https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png",
        "chain": "137",
        "price": "0.3793"
    },
    {
        "name": "WPOL",
        "symbol": "WMATIC",
        "decimals": 18,
        "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png",
        "chain": "137",
        "price": "0.3793"
    },
    {
        "name": "USDT",
        "symbol": "USDT",
        "decimals": 6,
        "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
        "chain": "137",
        "price": "0.9997"
    },
    {
        "name": "Bridged USD Coin",
        "symbol": "USDC.e",
        "decimals": 6,
        "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        "chain": "137",
        "price": "1.0002000400080016"
    },
    {
        "name": "(PoS) DAI Stablecoin",
        "symbol": "DAI",
        "decimals": 18,
        "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
        "chain": "137",
        "price": "0.9998"
    },
    {
        "name": "WBTC",
        "symbol": "WBTC",
        "decimals": 8,
        "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
        "chain": "137",
        "price": "61515.99"
    },
    {
        "name": "Wrapped Ether",
        "symbol": "WETH",
        "decimals": 18,
        "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
        "chain": "137",
        "price": "2385.89"
    },
    {
        "name": "(PoS) Binance USD",
        "symbol": "BUSD",
        "decimals": 18,
        "address": "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7/c67d96935d377f350fac55aed5c458de.png",
        "chain": "137",
        "price": "0.9997607081385534"
    },
    {
        "name": "USD Coin",
        "symbol": "USDC",
        "decimals": 6,
        "address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        "icon": "https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png",
        "chain": "137",
        "price": "1.0002000400080016"
    },
    {
        "name": "Avalanche Token",
        "symbol": "AVAX",
        "decimals": 18,
        "address": "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b/8da43cd8fbb77a5dd325a3c4f40e082b.png",
        "chain": "137",
        "price": "25.68"
    },
    {
        "name": "ChainLink Token",
        "symbol": "LINK(ERC677)",
        "decimals": 18,
        "address": "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0xb0897686c545045afc77cf20ec7a532e3120e0f1/d96618d9683455dbd0f1719965b9263e.png",
        "chain": "137",
        "price": "10.976219636274205"
    },
    {
        "name": "Aave (PoS)",
        "symbol": "AAVE",
        "decimals": 18,
        "address": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0xd6df932a45c0f255f85145f286ea0b292b21c90b/eee087b66747b09dbfb4ba0b34fd3697.png",
        "chain": "137",
        "price": "148.21294999082662"
    },
    {
        "name": "SUSHI",
        "symbol": "SUSHI",
        "decimals": 18,
        "address": "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png",
        "chain": "137",
        "price": "0.7339677311112653"
    },
    {
        "name": "Graph Token (PoS)",
        "symbol": "GRT",
        "decimals": 18,
        "address": "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0x5fe2b58c013d7601147dcdd68c143a77499f5531/9446e7f2fa061e831c95096d5d435fa4.png",
        "chain": "137",
        "price": "0.15603945941363706"
    },
    {
        "name": "Uniswap (PoS)",
        "symbol": "UNI",
        "decimals": 18,
        "address": "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
        "icon": "https://static.debank.com/image/matic_token/logo_url/0xb33eaad8d922b1083446dc23f610c2567fb5180f/fcee0c46fc9864f48ce6a40ed1cdd135.png",
        "chain": "137",
        "price": "6.696197927613786"
    },
    {
        "name": "BNB",
        "symbol": "BNB",
        "decimals": 18,
        "address": "0x0000000000000000000000000000000000000000",
        "icon": "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615",
        "chain": "56",
        "price": "552.8"
    },
    {
        "name": "WBNB",
        "symbol": "WBNB",
        "decimals": 18,
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "icon": "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
        "chain": "56",
        "price": "552.8"
    },
    {
        "name": "USDT",
        "symbol": "USDT",
        "decimals": 18,
        "address": "0x55d398326f99059fF775485246999027B3197955",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
        "chain": "56",
        "price": "0.9997"
    },
    {
        "name": "USD Coin",
        "symbol": "USDC",
        "decimals": 18,
        "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        "chain": "56",
        "price": "1.0002000400080016"
    },
    {
        "name": "DAI Stablecoin",
        "symbol": "DAI",
        "decimals": 18,
        "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
        "chain": "56",
        "price": "0.9998"
    },
    {
        "name": "WETH",
        "symbol": "WETH",
        "decimals": 18,
        "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
        "chain": "56",
        "price": "2385.57"
    },
    {
        "name": "Matic Token",
        "symbol": "MATIC",
        "decimals": 18,
        "address": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        "icon": "https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png",
        "chain": "56",
        "price": "0.3810670887929249"
    },
    {
        "name": "BUSD",
        "symbol": "BUSD",
        "decimals": 18,
        "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        "icon": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD-BD1/logo.png",
        "chain": "56",
        "price": "0.9997509148953948"
    },
    {
        "name": "XRP Token",
        "symbol": "XRP",
        "decimals": 18,
        "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe/247c7c042eb1c707fe016a18163a0b79.png",
        "chain": "56",
        "price": "0.5246807062227858"
    },
    {
        "name": "TRON",
        "symbol": "TRX",
        "decimals": 6,
        "address": "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3/dc0c451aa6c377c885cf5dc69eaaa9a3.png",
        "chain": "56",
        "price": "0.1578430507126043"
    },
    {
        "name": "Cardano Token",
        "symbol": "ADA(Binance-Peg)",
        "decimals": 18,
        "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47/6a787fc03d6fda44b2be771a30cd5670.png",
        "chain": "56",
        "price": "0.3523574684109943"
    },
    {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "decimals": 8,
        "address": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0xba2ae424d960c26247dd6c32edc70b295c744c43/5fb1f729987d700cd736b6990e164b50.png",
        "chain": "56",
        "price": "0.10865653177897934"
    },
    {
        "name": "Wrapped TON Coin",
        "symbol": "TONCOIN",
        "decimals": 9,
        "address": "0x76A797A59Ba2C17726896976B7B3747BfD1d220f",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0x76a797a59ba2c17726896976b7b3747bfd1d220f/71f89c6c8cd13cc99d62a263027ef074.png",
        "chain": "56",
        "price": "5.349140641943417"
    },
    {
        "name": "SOLANA",
        "symbol": "SOL",
        "decimals": 18,
        "address": "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF",
        "icon": "https://static.debank.com/image/bsc_token/logo_url/0x570a5d26f7765ecb712c0924e4de545b89fd43df/7c5db5c2eae571da837b65f5b9ae1a5c.png",
        "chain": "56",
        "price": "139.8463179901408"
    }
]

export default tokens;