---
sidebar_label: memory
title: agora.common.memory
---

## ProtocolMemory Objects

```python
class ProtocolMemory()
```

Manages protocol-related memory, including registration and retrieval of protocols and their implementations.

#### \_\_init\_\_

```python
def __init__(storage: Storage, **kwargs)
```

Initializes ProtocolMemory with the given storage and additional keyword arguments.

**Arguments**:

- `storage` _Storage_ - The storage backend to use for managing protocols.
- `**kwargs` - Additional keyword arguments, with their default values.

#### protocol_ids

```python
def protocol_ids() -> List[str]
```

Returns a list of registered protocol IDs.

**Returns**:

- `List[str]` - A list containing all registered protocol identifiers.

#### is_known

```python
def is_known(protocol_id: str) -> bool
```

Checks if a protocol ID is known (registered).

**Arguments**:

- `protocol_id` _str_ - The protocol identifier to check.

**Returns**:

- `bool` - True if the protocol is registered, False otherwise.

#### register_new_protocol

```python
def register_new_protocol(protocol_id: str,
                          protocol_document: str,
                          sources: List[str],
                          metadata: dict,
                          implementation: Optional[str] = None,
                          **kwargs)
```

Registers a new protocol with the specified details.

**Arguments**:

- `protocol_id` _str_ - The identifier of the new protocol.
- `protocol_document` _str_ - The document describing the protocol.
- `sources` _List[str]_ - A list of sources where the protocol is referenced.
- `metadata` _dict_ - Additional metadata related to the protocol.
- `implementation` _Optional[str], optional_ - The implementation code associated with the protocol. Defaults to None.
- `**kwargs` - Additional keyword arguments to store with the protocol.

**Raises**:

- `StorageError` - If the protocol is already registered.

#### get_protocol

```python
def get_protocol(protocol_id: str) -> Optional[Protocol]
```

Retrieves a Protocol object based on the protocol ID.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol to retrieve.

**Returns**:

- `Optional[Protocol]` - The Protocol object if found, else None.

#### get_implementation

```python
def get_implementation(protocol_id: str) -> Optional[str]
```

Gets the implementation associated with a given protocol ID.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.

**Returns**:

- `Optional[str]` - The implementation code if available, else None.

#### register_implementation

```python
def register_implementation(protocol_id: str, implementation: str)
```

Registers an implementation for a specific protocol ID.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `implementation` _str_ - The implementation code to associate with the protocol.

**Raises**:

- `StorageError` - If the protocol is not registered.

#### get_extra_field

```python
def get_extra_field(protocol_id: str, field: str, default=None)
```

Retrieves an extra field from a protocol&#x27;s information.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `field` _str_ - The field name to retrieve.
- `default` - The default value to return if the field is not present. Defaults to None.

**Returns**:

- `Any` - The value of the specified field, or the default if not found.

#### set_extra_field

```python
def set_extra_field(protocol_id: str, field: str, value)
```

Sets an extra field in a protocol&#x27;s information.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `field` _str_ - The field name to set.
- `value` - The value to assign to the field.

**Raises**:

- `StorageError` - If the protocol is not registered.
