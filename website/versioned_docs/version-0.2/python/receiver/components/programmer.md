---
sidebar_label: programmer
title: agora.receiver.components.programmer
---

## ReceiverProgrammer Objects

```python
class ReceiverProgrammer()
```

Generates implementations for protocols based on their specifications.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer, num_attempts: int = 5)
```

Initialize the ReceiverProgrammer with a Toolformer and retry attempts.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance managing tools.
- `num_attempts` _int, optional_ - Number of attempts to generate implementation. Defaults to 5.

#### \_\_call\_\_

```python
def __call__(tools: List[ToolLike],
             protocol_document: str,
             multiround: bool,
             additional_info: str = '') -> str
```

Generate the implementation code for a given protocol.

**Arguments**:

- `tools` _List[ToolLike]_ - A list of tools available for implementation.
- `protocol_document` _str_ - The protocol document outlining requirements.
- `multiround` _bool_ - Indicates if the protocol supports multiple rounds of interaction.
- `additional_info` _str, optional_ - Additional information for implementation. Defaults to &#x27;&#x27;.

**Returns**:

- `str` - The generated implementation code.
