async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const DiscordPfp = await hre.ethers.getContractFactory("DiscordPfp");

  const nft = await DiscordPfp.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmVykRE8maGCXNb5nVbb1fB8zRVNeG1hB3SwpcKoiLvDJc");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });