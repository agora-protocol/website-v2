---
sidebar_label: langchain
title: agora.common.toolformers.langchain
---

## LangChainConversation Objects

```python
class LangChainConversation(Conversation)
```

#### \_\_init\_\_

```python
def __init__(agent: CompiledGraph,
             messages: List[str],
             category: Optional[str] = None) -> None
```

Initializes a LangChainConversation instance.

**Arguments**:

- `agent` _CompiledGraph_ - The compiled LangChain agent to process messages.
- `messages` _List[str]_ - The conversation history.
- `category` _Optional[str], optional_ - An optional category or tag for the conversation.

#### \_\_call\_\_

```python
def __call__(message: str, print_output: bool = True) -> str
```

Sends a message to the conversation and returns the AI response.

**Arguments**:

- `message` _str_ - The user message or query.
- `print_output` _bool, optional_ - Whether to print the AI response as it streams.

**Returns**:

- `str` - The concatenated AI response.

## LangChainToolformer Objects

```python
class LangChainToolformer(Toolformer)
```

#### \_\_init\_\_

```python
def __init__(model: BaseChatModel)
```

Initializes a LangChainToolformer.

**Arguments**:

- `model` _BaseChatModel_ - The underlying language model for processing.

#### new_conversation

```python
def new_conversation(prompt: str,
                     tools: List[ToolLike],
                     category: Optional[str] = None) -> Conversation
```

Creates a new conversation using the provided prompt and tools.

**Arguments**:

- `prompt` _str_ - The initial conversation prompt.
- `tools` _List[ToolLike]_ - Tools available to the conversation.
- `category` _Optional[str], optional_ - A category or tag for this conversation.

**Returns**:

- `Conversation` - The conversation instance using the specified tools.
