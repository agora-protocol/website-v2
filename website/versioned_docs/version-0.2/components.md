---
id: components
title: Components
hide_table_of_contents: true
---

This document is meant to give an overview of the components in `Sender` and `Receiver`.

### Sender

Sender agents have 6 components:

- [SenderMemory](/docs/python/sender/memory): Keeps track of the suitable protocols and the number of conversations
- [SenderTransporter](/docs/python/sender/components/transporter): Manages the low-level communication between agents
- [Querier](/docs/python/sender/components/querier): Sends a natural language query to the Receiver
- [SenderNegotiator](/docs/python/sender/components/negotiator): Negotiates a protocol with the Receiver
- [ProtocolPicker](/docs/python/sender/components/protocol_picker): Decides, among a list of protocols, which protocol should be used to perform a given task
- [SenderProgrammer](/docs/python/sender/components/programmer): Implements a protocol as a Python routine

### Receiver

Receiver agents have 5 components:

- [ReceiverMemory](/docs/python/receiver/memory): Keeps track of known protocols and the number of conversations
- [Responder](/docs/python/receiver/components/responder): Replies to natural language queries from the Sender
- [ReceiverNegotiator](/docs/python/receiver/components/negotiator): Negotiates a protocol with the Sender
- [ReceiverProtocolChecker](/docs/python/receiver/components/protocol_checker): Verifies that a protocol (proposed by the Sender) is suitable for the Receiver
- [ReceiverProgrammer](/docs/python/receiver/components/programmer): Implements a protocol as a Python routine

in addition to [ReceiverServer](/docs/python/receiver/server), which serves a Receiver as a Flask server.
