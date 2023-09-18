(async () => {
    try {
      const Spacebear = await hre.ethers.getContractFactory("Spacebear");
      
      const spacebearInstance = await Spacebear.deploy();
   
      await spacebearInstance.waitForDeployment();
  
      console.log(
        `Deployed contract at ${spacebearInstance.target}`
      );
    } catch (err) {
      console.error(err);
      process.exitCode = 1; // if exitCode = 0, it means the script ran successfully
    }
  })();