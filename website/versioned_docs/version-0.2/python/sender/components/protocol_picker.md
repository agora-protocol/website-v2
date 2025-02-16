---
sidebar_label: protocol_picker
title: agora.sender.components.protocol_picker
---

## ProtocolPicker Objects

```python
class ProtocolPicker()
```

Facilitates checking and selecting protocols for a given task schema.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer) -> None
```

Initializes the ProtocolPicker.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance used for protocol checking.

#### check_protocol_for_task

```python
def check_protocol_for_task(protocol_document: str,
                            task_schema: TaskSchemaLike) -> bool
```

Checks if a given protocol is adequate for a task.

**Arguments**:

- `protocol_document` _str_ - The protocol document text.
- `task_schema` _TaskSchemaLike_ - The task schema.

**Returns**:

- `bool` - True if the protocol is adequate, otherwise False.

#### pick_protocol

```python
def pick_protocol(
        task_schema: TaskSchemaLike, *protocol_lists:
    List[Protocol]) -> Tuple[Optional[Protocol], dict]
```

Selects the first adequate protocol from provided lists.

**Arguments**:

- `task_schema` _TaskSchemaLike_ - The schema of the task.
- `*protocol_lists` _List[Protocol]_ - One or more lists of Protocol objects.

**Returns**:

(Optional[Protocol], dict): A tuple of the chosen protocol (if any)
and a dictionary of hash evaluations.
