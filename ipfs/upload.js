async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = await create('/ip4/127.0.0.1/tcp/5001');
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "My First NFT",
            attributes: [
            {
                "trait_type": "Peace",
                "value": "10" 
            },
            {
                "trait_type": "Love",
                "value": "100"
            },
            {
                "trait_type": "Web3",
                "value": "1000"
            },
            {
                "trait_type": "Awake",
                "value": "1000"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmNy5BeZipT98qS1hKg6cqrzma7HfJfkpoNgex9h2rsHid",
            description: "So much PLW3!"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();