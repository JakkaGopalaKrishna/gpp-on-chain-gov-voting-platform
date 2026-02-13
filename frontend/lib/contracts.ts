import governorAbi from "./GovernorABI.json";
import tokenAbi from "./TokenABI.json";

export const GOVERNOR_ADDRESS =
  process.env.NEXT_PUBLIC_GOVERNOR_ADDRESS!;

export const TOKEN_ADDRESS =
  process.env.NEXT_PUBLIC_TOKEN_ADDRESS!;

export { governorAbi, tokenAbi };
