---
id: sender
title: Sender
hide_table_of_contents: true
---

import PlatformSupport from '@site/src/theme/PlatformSupport';
import BoxLink from '@site/src/theme/BoxLink';

The Sender is an agent designed to execute tasks. It has seven components:

- SenderMemory (Receiver counterpart: ReceiverMemory)
- ProtocolPicker (counterpart: ProtocolChecker): Chooses a suitable protocol for a given task
- SenderNegotiator (counterpart: ReceiverNegotiator): Negotiates a new protocol on behalf of the Sender
- Executor (shared with the Receiver): Runs a routine
- Querier (counterpart: Responder): Sends a query using an LLM
- Transporter (counterpart: ReceiverServer): Converts a query into an Agora-formatted query

### Sender Configuration

<BoxLink href="https://docs.expo.dev/get-started/set-up-your-environment">Continue with Expo</BoxLink>
