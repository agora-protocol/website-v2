---
sidebar_label: memory
title: agora.receiver.memory
---

## ReceiverMemory Objects

```python
class ReceiverMemory(ProtocolMemory)
```

Manages memory for the Receiver, including protocol registrations and suitability assessments.

#### register_new_protocol

```python
def register_new_protocol(protocol_id: str, protocol_sources: List[str],
                          protocol_document: str, metadata: dict)
```

Registers a new protocol with given sources, document, and metadata.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `protocol_sources` _List[str]_ - A list of source URLs for the protocol.
- `protocol_document` _str_ - The protocol contents.
- `metadata` _dict_ - Additional protocol metadata.

#### get_protocol_conversations

```python
def get_protocol_conversations(protocol_id: str) -> int
```

Returns the number of conversations associated with a protocol.

**Arguments**:

- `protocol_id` _str_ - The protocol&#x27;s identifier.

**Returns**:

- `int` - The conversation count.

#### increment_protocol_conversations

```python
def increment_protocol_conversations(protocol_id: str) -> None
```

Increments the conversation count for the specified protocol.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.

#### set_suitability

```python
def set_suitability(protocol_id: str, suitability: Suitability) -> None
```

Sets the suitability for a given protocol.

**Arguments**:

- `protocol_id` _str_ - The identifier of the protocol.
- `suitability` _Suitability_ - The new suitability value.

#### get_suitability

```python
def get_suitability(protocol_id: str) -> Suitability
```

Retrieves the suitability for a given protocol.

**Arguments**:

- `protocol_id` _str_ - The protocol&#x27;s identifier.

**Returns**:

- `Suitability` - The current suitability status.
