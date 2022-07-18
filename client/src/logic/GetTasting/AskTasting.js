import { infuraGetCoffe1ERC20 } from '../erc20';

const AskTasting = async (values) => {
  const erc20Infura = await infuraGetCoffe1ERC20();

  try {
    // const info = await erc20.callStatic.getTasteData(values.batchNo);
    const info = await erc20Infura.callStatic.getTasteData(values.batchNo);
    return { data: info, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};

export default AskTasting;
