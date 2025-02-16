---
sidebar_label: base
title: agora.common.toolformers.base
---

## Tool Objects

```python
class Tool()
```

Represents a tool with a name, description, argument schema, return schema, and a callable function.

#### \_\_init\_\_

```python
def __init__(name: str, description: str, args_schema: dict,
             return_schema: dict, func: Callable) -> None
```

Initializes the Tool.

**Arguments**:

- `name` _str_ - The name of the tool.
- `description` _str_ - A brief description of the tool.
- `args_schema` _dict_ - JSON schema for input arguments.
- `return_schema` _dict_ - JSON schema for the return values.
- `func` _Callable_ - The function implementing the tool.

#### openai_schema

```python
@property
def openai_schema() -> dict
```

Returns the OpenAI-compatible schema of the tool.

**Returns**:

- `dict` - The OpenAI-compatible schema.

#### from_function

```python
@staticmethod
def from_function(func: Callable,
                  name: str = None,
                  description: str = None,
                  args_schema: dict = None,
                  return_schema: dict = None,
                  infer_schema: bool = True,
                  inference_known_types: dict = DEFAULT_KNOWN_TYPES,
                  strict_inference: bool = False) -> 'Tool'
```

Create a Tool instance from a given function, optionally inferring schemas.

**Arguments**:

- `func` _Callable_ - The function to create a Tool from.
- `name` _str, optional_ - The name of the tool. Defaults to the function&#x27;s name if None.
- `description` _str, optional_ - A description of the tool. Defaults to the function&#x27;s docstring or schema description.
- `args_schema` _dict, optional_ - JSON schema for input arguments. If None and infer_schema is True, schema is inferred. Defaults to None.
- `return_schema` _dict, optional_ - JSON schema for return values. If None and infer_schema is True, schema is inferred. Defaults to None.
- `infer_schema` _bool, optional_ - Whether to infer schemas automatically. Defaults to True.
- `inference_known_types` _dict, optional_ - Known types for schema inference. Defaults to DEFAULT_KNOWN_TYPES.
- `strict_inference` _bool, optional_ - Whether to enforce strict schema inference. Defaults to False.

**Returns**:

- `Tool` - A new Tool instance based on the provided function.

**Raises**:

- `ValueError` - If required parameters are missing when infer_schema is False.

#### from_toollike

```python
@staticmethod
def from_toollike(tool_like: 'ToolLike',
                  name: Optional[str] = None,
                  description: Optional[str] = None,
                  args_schema: Optional[dict] = None,
                  return_schema: Optional[dict] = None,
                  inference_known_types: Optional[dict] = DEFAULT_KNOWN_TYPES,
                  strict_inference: Optional[bool] = None) -> 'Tool'
```

Convert a Tool-like object into a Tool instance.

**Arguments**:

- `tool_like` _ToolLike_ - The Tool-like object to convert.
- `name` _Optional[str], optional_ - The name of the tool. Defaults to None.
- `description` _Optional[str], optional_ - A description of the tool. Defaults to None.
- `args_schema` _Optional[dict], optional_ - JSON schema for input arguments. Defaults to None.
- `return_schema` _Optional[dict], optional_ - JSON schema for return values. Defaults to None.
- `inference_known_types` _Optional[dict], optional_ - Known types for schema inference. Defaults to DEFAULT_KNOWN_TYPES.
- `strict_inference` _Optional[bool], optional_ - Whether to enforce strict schema inference. Defaults to None.

**Returns**:

- `Tool` - A new Tool instance based on the Tool-like object.

**Raises**:

- `ValueError` - If the Tool-like object is neither a Tool nor a callable.

#### docstring

```python
@property
def docstring() -> str
```

Generate a docstring for the tool based on its description and schemas.

**Returns**:

- `str` - The generated docstring.

#### \_\_str\_\_

```python
def __str__() -> str
```

Return the string representation of the Tool.

**Returns**:

- `str` - The string representation.

#### as_documented_python

```python
def as_documented_python() -> str
```

Export the tool as a documented Python function.

**Returns**:

- `str` - The Python function code as a string with documentation.

#### as_annotated_function

```python
def as_annotated_function() -> Callable
```

Return the tool as an annotated function.

**Returns**:

- `Callable` - The annotated function.

## Toolformer Objects

```python
class Toolformer(ABC)
```

Abstract base class for Toolformers, which manage conversations with tools.

#### new_conversation

```python
@abstractmethod
def new_conversation(prompt: str,
                     tools: List[ToolLike],
                     category: Optional[str] = None) -> Conversation
```

Starts a new conversation with the given prompt and tools.

**Arguments**:

- `prompt` _str_ - The initial prompt for the conversation.
- `tools` _List[ToolLike]_ - Tools to be available in the conversation.
- `category` _Optional[str]_ - The category of the conversation.

**Returns**:

- `Conversation` - A Conversation instance managing the interaction.
