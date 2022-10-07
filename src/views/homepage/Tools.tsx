import { FunctionComponent } from 'react';
import { Container, Heading } from '@chakra-ui/react';

import { CodeLine, CodeFlag, CodeLog, CodeComment, CodeBlock } from '@components/CodeBlock';

const Code = (): JSX.Element => (
  <CodeBlock py={2} px={6}>
    <CodeLine lib="ockam">node create relay</CodeLine>

    <br />

    <CodeComment># -- APPLICATION SERVICE --</CodeComment>

    <br />

    <CodeLine lib="python3">
      <CodeFlag>-m</CodeFlag> http.server <CodeFlag>--bind</CodeFlag> 127.0.0.1 5000
    </CodeLine>

    <br />

    <CodeLine lib="ockam">node create server_sidecar</CodeLine>
    <CodeLine lib="ockam">
      tcp-outlet create <CodeFlag>--at</CodeFlag> /node/server_sidecar <CodeFlag>--from</CodeFlag>{' '}
      /service/outlet <CodeFlag>--to</CodeFlag> 127.0.0.1:5000
    </CodeLine>
    <CodeLine lib="ockam">
      forwarder create server_sidecar <CodeFlag>--at</CodeFlag> /node/relay{' '}
      <CodeFlag>--to</CodeFlag> /node/server_sidecar
    </CodeLine>

    <br />

    <CodeComment> # -- APPLICATION CLIENT --</CodeComment>

    <br />

    <CodeLine lib="ockam">node create client_sidecar</CodeLine>
    <CodeLine lib="ockam">
      secure-channel create <CodeFlag>--from</CodeFlag> /node/client_sidecar{' '}
      <CodeFlag>--to</CodeFlag> /node/relay/service/forward_to_server_sidecar/service/api
    </CodeLine>
    <CodeLine prefix="|" prefixColor="#B866EA" lib="ockam" ml={10}>
      tcp-inlet create <CodeFlag>--at</CodeFlag> /node/client_sidecar <CodeFlag>--from</CodeFlag>{' '}
      127.0.0.1:7000 <CodeFlag>--to</CodeFlag> -/service/outlet
    </CodeLine>

    <br />

    <CodeLog>
      Created Secure Channel to <i>/node/relay/service/api</i>
    </CodeLog>
    <CodeLog>
      Created Secure Channel to <i>/node/relay/service/forward_to_server_sidecar/service/api</i>
    </CodeLog>
    <CodeLog>Created TCP Inlet from 127.0.0.1:7000</CodeLog>

    <br />

    <CodeLine lib="curl">
      <CodeFlag>--head</CodeFlag> 127.0.0.1:7000
    </CodeLine>

    <br />

    <CodeLog>HTTP/1.0 200 OK</CodeLog>
    <CodeLog>...</CodeLog>

    <br />
  </CodeBlock>
);

const Tools: FunctionComponent = () => (
  <Container variant="section" pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 30 }}>
    <Heading as="h2" size="h2" bgColor="white" mb={{ base: 12, lg: 16 }}>
      Simple Tools
    </Heading>

    <Code />
  </Container>
);

export default Tools;
