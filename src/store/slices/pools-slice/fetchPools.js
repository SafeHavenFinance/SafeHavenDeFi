import fetchPool from "./fetchPool";

const fetchPools = async (stakesToFetch) => {
  const data = await Promise.all(
    stakesToFetch.map(async (stakeConfig) => {
      const stake = await fetchPool(stakeConfig);
      const serializedStake = { ...stake, token: stake.token };
      return serializedStake;
    })
  );
  // console.log("data", data)
  return data;
};

export default fetchPools;
