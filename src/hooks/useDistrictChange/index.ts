import { useStateContext } from "../";
import { DistrictTypes } from "./type";

type WordTypes = keyof string
const useDistrict = (districtId?: DistrictTypes) => {
  const globalState = useStateContext();
  const findWord = (word: WordTypes) => {
    const code: DistrictTypes =
      districtId?.toString || globalState?.District || "id";

  };
  return findWord;
};

export default useDistrict;