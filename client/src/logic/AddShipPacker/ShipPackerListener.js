import { useState, useEffect } from 'react';
import { getCoffeERC20 } from '../erc20';

const ShipPackerListener = () => {
  const [shipPackerRegistered, setShipPackerRegistered] = useState({});

  useEffect(() => {
    const erc20 = getCoffeERC20();
    erc20.on('DoneShippingPacker', (user, batchNo, event) => {
      setShipPackerRegistered({
        user,
        batchNo,
        tx: event.transactionHash,
      });
    });
    return () => {
      erc20.removeAllListeners('DoneShippingPacker');
    };
  }, []);

  return { shipPackerRegistered };
};

export default ShipPackerListener;
