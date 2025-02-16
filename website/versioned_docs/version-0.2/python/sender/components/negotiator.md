---
sidebar_label: negotiator
title: agora.sender.components.negotiator
---

## SenderNegotiator Objects

```python
class SenderNegotiator()
```

Manages the negotiation of protocols for sending tasks.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer, max_rounds: int = 10) -> None
```

Initializes the SenderNegotiator.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance.
- `max_rounds` _int_ - Maximum number of negotiation rounds.

#### \_\_call\_\_

```python
def __call__(task_schema: TaskSchemaLike,
             callback: Callable[[str], str],
             additional_info: str = '') -> Protocol
```

Negotiates and finalizes a protocol based on the task schema.

**Arguments**:

- `task_schema` _TaskSchemaLike_ - The schema of the task.
- `callback` _Callable[[str], str]_ - A callback to handle messages from the other party.
- `additional_info` _str_ - Additional information for the negotiation.

**Returns**:

- `Protocol` - The finalized Protocol object.
