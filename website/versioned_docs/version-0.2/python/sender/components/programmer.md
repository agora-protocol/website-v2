---
sidebar_label: programmer
title: agora.sender.components.programmer
---

## SenderProgrammer Objects

```python
class SenderProgrammer()
```

Generates implementations based on task schemas and protocol documents.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer, num_attempts: int = 5)
```

Initializes the SenderProgrammer.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance.
- `num_attempts` _int_ - Number of attempts to generate implementations.

#### \_\_call\_\_

```python
def __call__(task_schema: TaskSchemaLike, protocol_document: str) -> str
```

Generates implementation code for a given schema and protocol.

**Arguments**:

- `task_schema` _TaskSchemaLike_ - The schema of the task.
- `protocol_document` _str_ - The protocol specifications.

**Returns**:

- `str` - The generated implementation code.
