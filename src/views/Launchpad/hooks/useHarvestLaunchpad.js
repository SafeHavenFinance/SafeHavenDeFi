import { useCallback } from "react";
import { useLaunchpad } from "../../../hooks/useContract";
import { launchpadHarvest } from "../../../utils/calls";

const useHarvestLaunchpad = (pid) => {
  const launchpadContract = useLaunchpad();

  const handleHarvest = useCallback(async () => {
    const txHash = await launchpadHarvest(launchpadContract,  pid );
    console.info(txHash);
  }, [launchpadContract, pid]);

  return { onHarvest: handleHarvest };
};

export default useHarvestLaunchpad;
