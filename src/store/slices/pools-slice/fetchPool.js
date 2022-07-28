import fetchPublicStakeData from "./fetchPublicPoolData";

const fetchPool = async (stake) => {
  const stakePublicData = await fetchPublicStakeData(stake);
  // console.log("stake-stakePublicData", stake, stakePublicData)
  
  return { ...stake, ...stakePublicData };
};

export default fetchPool;
