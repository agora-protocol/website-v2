---
sidebar_label: memory
title: agora.sender.memory
---

## SenderMemory Objects

```python
class SenderMemory(ProtocolMemory)
```

Manages the memory for the Sender, including protocol suitability and task conversations.

#### \_\_init\_\_

```python
def __init__(storage: Storage)
```

Initializes SenderMemory with a storage backend.

**Arguments**:

- `storage` _Storage_ - The storage backend for memory.

#### get_suitability

```python
def get_suitability(protocol_id: str, task_id: str,
                    target: Optional[str]) -> Suitability
```

Retrieves the suitability status for a given protocol ID and task ID.

**Arguments**:

- `protocol_id` _str_ - The protocol identifier.
- `task_id` _str_ - The task identifier.
- `target` _Optional[str]_ - The target system or service.

**Returns**:

- `Suitability` - The stored suitability status.

#### get_known_suitable_protocol_ids

```python
def get_known_suitable_protocol_ids(task_id, target)
```

Returns known suitable protocol IDs for the given task and target.

**Arguments**:

- `task_id` - The task identifier.
- `target` - The target system or service.

**Returns**:

- `list` - A list of known suitable protocol IDs.

#### get_suitable_protocol

```python
def get_suitable_protocol(task_id, target) -> Optional[Protocol]
```

Retrieves a suitable protocol object for the given task and target if available.

**Arguments**:

- `task_id` - The task identifier.
- `target` - The target system or service.

**Returns**:

- `Optional[Protocol]` - The first suitable protocol found or None if none available.

#### increment_task_conversations

```python
def increment_task_conversations(task_id, target)
```

Increments the conversation counter for a given task and target.

**Arguments**:

- `task_id` - The task identifier.
- `target` - The target system or service.

#### get_task_conversations

```python
def get_task_conversations(task_id, target)
```

Retrieves the number of stored conversations for a task and target.

**Arguments**:

- `task_id` - The task identifier.
- `target` - The target system or service.

**Returns**:

- `int` - The number of conversations.

#### increment_protocol_conversations

```python
def increment_protocol_conversations(protocol_id)
```

Increments the conversation counter for a given protocol.

**Arguments**:

- `protocol_id` - The protocol identifier.

#### get_protocol_conversations

```python
def get_protocol_conversations(protocol_id)
```

Retrieves the number of stored conversations for a protocol.

**Arguments**:

- `protocol_id` - The protocol identifier.

**Returns**:

- `int` - The number of conversations.

#### has_suitable_protocol

```python
def has_suitable_protocol(task_id, target)
```

Checks whether a suitable protocol exists for a given task and target.

**Arguments**:

- `task_id` - The task identifier.
- `target` - The target system or service.

**Returns**:

- `bool` - True if a suitable protocol exists, otherwise False.

#### get_unclassified_protocols

```python
def get_unclassified_protocols(task_id)
```

Get protocols that have not been classified for a specific task.

**Arguments**:

- `task_id` - The identifier of the task.

**Returns**:

- `List[str]` - A list of unclassified protocol IDs.

#### set_default_suitability

```python
def set_default_suitability(protocol_id: str, task_id: str,
                            suitability: Suitability)
```

Set the default suitability for a protocol and task.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `task_id` _str_ - The identifier of the task.
- `suitability` _Suitability_ - The default suitability status to set.

#### set_suitability_override

```python
def set_suitability_override(protocol_id: str, task_id: str, target: str,
                             suitability: Suitability)
```

Override the suitability of a protocol for a specific task and target.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `task_id` _str_ - The identifier of the task.
- `target` _str_ - The target for which the suitability is overridden.
- `suitability` _Suitability_ - The overridden suitability status.

#### register_new_protocol

```python
def register_new_protocol(protocol_id: str, protocol_document: str,
                          sources: list, metadata: dict)
```

Register a new protocol with the given sources, document, and metadata.

**Arguments**:

- `protocol_id` _str_ - The identifier of the new protocol.
- `protocol_document` _str_ - The document describing the protocol.
- `sources` _list_ - A list of sources where the protocol is referenced.
- `metadata` _dict_ - Additional metadata related to the protocol.
