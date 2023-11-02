const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Div Contract", function () {
  let contractDIV;
  beforeEach(async function () {
    const [deployer, addr1, addr2] = await ethers.getSigners();
    contractDIV = await ethers.deployContract("Div");
    await contractDIV.waitForDeployment();
    console.log("Contract address:", await contractDIV.getAddress());
  });

  describe("Basic Functionality", function () {
    it("Should return the correct initial values", async function () {
      expect(await contractDIV.x()).to.equal(10);
      expect(await contractDIV.y()).to.equal(2);
      expect(await contractDIV.div()).to.equal(0); // The initial division result should be 0.
    });
  });

  describe("features", function () {
    it("Should DIV", async function () {
      await contractDIV.division();
      expect(await contractDIV.div()).to.equal(5);
    });
  });
});

describe("Sum Contract", function () {
  let contractDIV;
  beforeEach(async function () {
    const [deployer, addr1, addr2] = await ethers.getSigners();
    contractDIV = await ethers.deployContract("Sum");
    await contractDIV.waitForDeployment();
    console.log("Contract address:", await contractDIV.getAddress());
  });

  describe("Basic Functionality", function () {
    it("Should return the correct initial values", async function () {
      expect(await contractDIV.x()).to.equal(5);
      expect(await contractDIV.y()).to.equal(2);
      expect(await contractDIV.sum()).to.equal(0); // The initial division result should be 0.
    });
  });

  describe("features", function () {
    it("Should DIV", async function () {
      await contractDIV.summation();
      expect(await contractDIV.sum()).to.equal(7);
    });
  });
});
