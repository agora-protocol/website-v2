---
sidebar_label: core
title: agora.receiver.core
---

## Receiver Objects

```python
class Receiver()
```

Handles receiving and processing protocols, including negotiation and execution.

#### \_\_init\_\_

```python
def __init__(memory: ReceiverMemory,
             responder: Responder,
             protocol_checker: ReceiverProtocolChecker,
             negotiator: ReceiverNegotiator,
             programmer: ReceiverProgrammer,
             executor: Executor,
             tools: List[ToolLike],
             additional_info: str = '',
             implementation_threshold: int = 5)
```

Initializes the Receiver with needed components and configurations.

**Arguments**:

- `memory` _ReceiverMemory_ - Manages protocol memory.
- `responder` _Responder_ - Handles responses based on protocols.
- `protocol_checker` _ReceiverProtocolChecker_ - Checks protocol validity.
- `negotiator` _ReceiverNegotiator_ - Manages protocol negotiations.
- `programmer` _ReceiverProgrammer_ - Generates protocol implementations.
- `executor` _Executor_ - Executes protocol implementations.
- `tools` _List[ToolLike]_ - A list of available tools.
- `additional_info` _str, optional_ - Extra info used during operation.
- `implementation_threshold` _int, optional_ - Threshold for auto-generating code.

#### make_default

```python
@staticmethod
def make_default(toolformer,
                 storage: Storage = None,
                 responder: Responder = None,
                 protocol_checker: ReceiverProtocolChecker = None,
                 negotiator: ReceiverNegotiator = None,
                 programmer: ReceiverProgrammer = None,
                 executor: Executor = None,
                 tools: List[ToolLike] = None,
                 additional_info: str = '',
                 storage_path: str = './.agora/storage/receiver.json',
                 implementation_threshold: int = 5) -> 'Receiver'
```

Creates a default Receiver instance with customizable components.

**Arguments**:

- `toolformer` - The Toolformer instance.
- `storage` _Storage, optional_ - A storage backend or None to create a default.
- `responder` _Responder, optional_ - The responder component.
- `protocol_checker` _ReceiverProtocolChecker, optional_ - The protocol checker.
- `negotiator` _ReceiverNegotiator, optional_ - The negotiator component.
- `programmer` _ReceiverProgrammer, optional_ - The programmer component.
- `executor` _Executor, optional_ - The executor component.
- `tools` _List[ToolLike], optional_ - A list of tools. Defaults to empty list.
- `additional_info` _str, optional_ - Extra info. Defaults to &#x27;&#x27;.
- `storage_path` _str, optional_ - Path for JSON storage. Defaults to &#x27;./receiver_storage.json&#x27;.
- `storage`0 _int, optional_ - Threshold for code generation.

**Returns**:

- `storage`1 - A configured Receiver instance.

#### create_conversation

```python
def create_conversation(protocol_hash: str,
                        protocol_sources: List[str]) -> Conversation
```

Creates a new conversation based on the protocol hash and sources.

**Arguments**:

- `protocol_hash` _str_ - Hash identifier for the protocol.
- `protocol_sources` _List[str]_ - A list of protocol source URLs.

**Returns**:

- `Conversation` - A new conversation or negotiation session.

**Raises**:

- `ProtocolRetrievalError` - If unable to download the protocol.
- `ProtocolRejectedError` - If the protocol is deemed inadequate.
