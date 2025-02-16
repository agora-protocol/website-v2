---
sidebar_label: protocol_checker
title: agora.receiver.components.protocol_checker
---

## ReceiverProtocolChecker Objects

```python
class ReceiverProtocolChecker()
```

Checks protocol validity and suitability for the Receiver.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer)
```

Initialize the ReceiverProtocolChecker with a Toolformer.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance managing tools.

#### \_\_call\_\_

```python
def __call__(protocol_document: str,
             tools: List[ToolLike],
             additional_info: str = '') -> bool
```

Determine if the protocol is suitable based on available tools.

**Arguments**:

- `protocol_document` _str_ - The protocol document to evaluate.
- `tools` _List[ToolLike]_ - A list of tools available to implement the protocol.
- `additional_info` _str, optional_ - Additional information for evaluation. Defaults to &#x27;&#x27;.

**Returns**:

- `bool` - True if the protocol is suitable, False otherwise.
