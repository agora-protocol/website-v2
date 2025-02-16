---
sidebar_label: responder
title: agora.receiver.components.responder
---

#### PROTOCOL_RESPONDER_PROMPT

\

## Responder Objects

```python
class Responder()
```

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer) -> None
```

Initializes a new Responder.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance handling transformations.

#### create_protocol_conversation

```python
def create_protocol_conversation(protocol_document: str,
                                 tools: List[ToolLike],
                                 additional_info: str = '') -> Conversation
```

Creates a protocol-based conversation.

**Arguments**:

- `protocol_document` _str_ - The text describing the protocol.
- `tools` _List[ToolLike]_ - A list of tools available to the conversation.
- `additional_info` _str, optional_ - Additional context for the conversation.

**Returns**:

- `Conversation` - The newly created conversation following the protocol.

#### create_nl_conversation

```python
def create_nl_conversation(tools: List[ToolLike],
                           additional_info: str = '') -> Conversation
```

Creates a natural language conversation without protocol constraints.

**Arguments**:

- `tools` _List[ToolLike]_ - Tools available during the conversation.
- `additional_info` _str, optional_ - Additional context.

**Returns**:

- `Conversation` - The created NL conversation.

#### create_conversation

```python
def create_conversation(protocol_document: Optional[str],
                        tools: List[ToolLike],
                        additional_info: str = '') -> Conversation
```

Creates either a protocol-based or a natural language conversation.

**Arguments**:

- `protocol_document` _Optional[str]_ - The protocol text if available. If None, a natural language conversation is created.
- `tools` _List[ToolLike]_ - Tools for conversation handling.
- `additional_info` _str, optional_ - Additional context or configuration.

**Returns**:

- `Conversation` - The resulting conversation instance.
