---
sidebar_label: transporter
title: agora.sender.components.transporter
---

## SenderTransporter Objects

```python
class SenderTransporter(ABC)
```

#### new_conversation

```python
@abstractmethod
def new_conversation(target: str, multiround: bool, protocol_hash: str,
                     protocol_sources: List[str]) -> Conversation
```

Creates a new conversation with the target.

**Arguments**:

- `target` _str_ - The target URL or endpoint.
- `multiround` _bool_ - Whether the conversation is multi-round.
- `protocol_hash` _str_ - The protocol&#x27;s hash identifier.
- `protocol_sources` _List[str]_ - Sources referencing the protocol.

**Returns**:

- `Conversation` - A conversation instance.

## SimpleSenderTransporter Objects

```python
class SimpleSenderTransporter(SenderTransporter)
```

## SimpleExternalConversation Objects

```python
class SimpleExternalConversation(Conversation)
```

#### \_\_init\_\_

```python
def __init__(target: str, multiround: bool, protocol_hash: str,
             protocol_sources: List[str])
```

Initializes a simple external conversation.

**Arguments**:

- `target` _str_ - The target URL or endpoint.
- `multiround` _bool_ - Whether multi-round communication is enabled.
- `protocol_hash` _str_ - The protocol hash.
- `protocol_sources` _List[str]_ - Protocol sources.

#### \_\_call\_\_

```python
def __call__(message: str)
```

Sends a message in the current conversation.

**Arguments**:

- `message` _str_ - The message to send.

**Returns**:

- `dict` - The response containing &#x27;status&#x27; and &#x27;body&#x27;.

#### close

```python
def close() -> None
```

Closes the conversation by deleting it from the remote service.

#### new_conversation

```python
def new_conversation(
        target: str, multiround: bool, protocol_hash: str,
        protocol_sources: List[str]) -> SimpleExternalConversation
```

Creates a new SimpleExternalConversation instance.

**Arguments**:

- `target` _str_ - The target URL or endpoint.
- `multiround` _bool_ - Whether the conversation is multi-round.
- `protocol_hash` _str_ - The protocol&#x27;s hash identifier.
- `protocol_sources` _List[str]_ - Protocol sources.

**Returns**:

- `SimpleExternalConversation` - A new conversation instance.
