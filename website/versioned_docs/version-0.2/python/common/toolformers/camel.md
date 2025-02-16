---
sidebar_label: camel
title: agora.common.toolformers.camel
---

## CamelConversation Objects

```python
class CamelConversation(Conversation)
```

Handles conversations using the Camel AI Toolformer.

#### \_\_init\_\_

```python
def __init__(toolformer: 'CamelToolformer',
             agent: 'camel.agents.ChatAgent',
             category: Optional[str] = None) -> None
```

Initialize the CamelConversation with a Toolformer and ChatAgent.

**Arguments**:

- `toolformer` _CamelToolformer_ - The CamelToolformer instance managing the conversation.
- `agent` _ChatAgent_ - The ChatAgent handling the conversation logic.
- `category` _Optional[str], optional_ - The category of the conversation. Defaults to None.

**Raises**:

- `ImportError` - If camel-ai is not available.

#### \_\_call\_\_

```python
def __call__(message: str, print_output: bool = True) -> str
```

Process a message within the conversation and return the response.

**Arguments**:

- `message` _str_ - The message to process.
- `print_output` _bool, optional_ - Whether to print the response. Defaults to True.

**Returns**:

- `str` - The response from the conversation.

## CamelToolformer Objects

```python
class CamelToolformer(Toolformer)
```

Toolformer implementation using the Camel AI framework.

#### \_\_init\_\_

```python
def __init__(model_platform: 'camel.types.ModelPlatformType',
             model_type: 'camel.types.ModelType',
             model_config_dict: Optional[dict] = None,
             name: Optional[str] = None) -> None
```

Initialize the CamelToolformer with model details.

**Arguments**:

- `model_platform` _ModelPlatformType_ - The platform of the model (e.g. &quot;openai&quot;).
- `model_type` _ModelPlatformType_ - The type of the model (e.g. &quot;gpt-4o&quot;).
- `model_config_dict` _dict, optional_ - Configuration dictionary for the model. Defaults to None (empty dict).
- `name` _Optional[str], optional_ - Optional name for the Toolformer. Defaults to None.

**Raises**:

- `ImportError` - If camel-ai is not available.

#### name

```python
@property
def name() -> str
```

Get the name of the Toolformer.

**Returns**:

- `str` - The name of the Toolformer.

#### new_conversation

```python
def new_conversation(prompt: str,
                     tools: List[ToolLike],
                     category: Optional[str] = None) -> Conversation
```

Start a new conversation with the given prompt and tools.

**Arguments**:

- `prompt` _str_ - The initial prompt for the conversation.
- `tools` _List[ToolLike]_ - A list of tools to be available in the conversation.
- `category` _Optional[str], optional_ - The category of the conversation. Defaults to None.

**Returns**:

- `Conversation` - A Conversation instance managing the interaction.
