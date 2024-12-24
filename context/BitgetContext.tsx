'use client';

import { createContext, useEffect, useState } from 'react';
import { OmniConnect, RequestMethods } from '@bitget-wallet/omni-connect';
import { IBitgetContext } from '@/hooks/useBitget';

const metaData = {
  name: 'Beraciaga',
  iconUrl: '/images/icon-bera-coin.svg',
  url: 'https://bera-83kt.vercel.app/',
};

interface IBitgetWalletContext extends IBitgetContext {
  bitgetLoading?: boolean;
  bitgetConnected?: boolean;
  bitgetAddress?: string;
}

export const BitgetContext = createContext<IBitgetWalletContext>({});

function BitgetProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string>();
  const [txData, setTxData] = useState<any>();
  const [msgSig, setMsgSig] = useState<any>();
  const [signature, setSignature] = useState<any>();
  const [reciept, setReciept] = useState<any>();
  const [bitgetProvider, setBitgetProvider] = useState<OmniConnect>();

  useEffect(() => {
    if (!window) return;

    setLoading(true);
    const connector = new OmniConnect({
      metadata: metaData,
      namespace: {
        eip155: {
          chains: [
            '1',
            '8453',
            '5000',
            '42161',
            '43114',
            '56',
            '59144',
            '1088',
            '10',
            '137',
            '1101',
            '324',
            '100',
            '169',
            '534352',
            '81457',
            '34443'
          ],
        },
      },
    });
    try {
      connector.provider.restoreConnection();
    } catch (err: any) {
      console.log('restore Bitget Connection failed: %o', err);
    }
    console.log('Bitget connector: %o', connector);
    setBitgetProvider(connector);
    setLoading(false);

    const subscription = connector.provider.onStatusChange(
      (walletInfo: any) => {
        console.log("onStatusChange", walletInfo);
        const { id, namespaceKey, event, connected, result } = walletInfo;
        switch (event) {
          case RequestMethods.Connect:
          case RequestMethods.Disconnect:
            setConnected(connected);
            setAddress(result?.address);

            setTxData({
              ...txData,
              from: result?.address,
            });
            break;
          case RequestMethods.SignMessage:
            setMsgSig(result);
            break;
          case RequestMethods.SignTransaction:
          case RequestMethods.SendTransaction:
            setSignature(result?.signature);
            setReciept(result?.reciept);
            break;
          default:
            break;
        }
      },
      (err: any) => {
        const { code, message } = err;
        console.error(`error stream: code: ${code}, message: ${message}`);
      }
    );
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <BitgetContext.Provider value={{
      bitgetProvider,
      bitgetLoading: loading,
      bitgetConnected: connected,
      bitgetAddress: address,
    }}>
      {children}
    </BitgetContext.Provider>
  );
}

export default BitgetProvider;
