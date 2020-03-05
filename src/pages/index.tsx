import { Box, Grid, Heading } from '@chakra-ui/core';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';

import { Layout } from '../components/Layout';
import { useEagerConnect, useInactiveListener } from '../lib/hooks';
import { formatEthAddress } from '../lib/utils';

export default function Index(): JSX.Element {
  const { connector, account } = useWeb3React<Web3Provider>();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Layout>
      <Grid templateColumns="1fr minmax(auto, 1000px) 1fr" gap={6}>
        <Box />
        <Box>
          <Heading>Hello {formatEthAddress(account)}!</Heading>
        </Box>
        <Box />
      </Grid>
    </Layout>
  );
}
