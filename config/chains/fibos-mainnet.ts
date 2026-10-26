import { Chain } from "@/types/chain"

export const fibosMainnet = new Chain({
  name: "FIBOS",
  netType: "Mainnet",
  logo: "/logos/fibos.png",
  symbol: "FO",
  endpoints: ["https://to-rpc.fibos.io"],
  slug: "fo",
  bindPath: ["fo"],
})
