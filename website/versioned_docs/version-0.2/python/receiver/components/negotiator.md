---
sidebar_label: negotiator
title: agora.receiver.components.negotiator
---

## ReceiverNegotiator Objects

```python
class ReceiverNegotiator()
```

Manages protocol negotiations for the Receiver.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer)
```

Initialize the ReceiverNegotiator with a Toolformer.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance managing tools.

#### create_conversation

```python
def create_conversation(tools: List[ToolLike],
                        additional_info: str = '') -> Conversation
```

Create a new negotiation conversation based on available tools.

**Arguments**:

- `tools` _List[ToolLike]_ - A list of tools available for negotiation.
- `additional_info` _str, optional_ - Additional information for the negotiation. Defaults to &#x27;&#x27;.

**Returns**:

- `Conversation` - A Conversation instance managing the negotiation.
