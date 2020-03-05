export const formatEthAddress = (address: string | undefined | null) =>
  address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : '-';
