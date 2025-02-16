---
sidebar_label: executor
title: agora.common.executor
---

## Executor Objects

```python
class Executor()
```

Abstract base class for executors that run protocol implementations.

#### \_\_call\_\_

```python
@abstractmethod
def __call__(protocol_id: str, code: str, tools: List[ToolLike],
             input_args: list, input_kwargs: dict) -> Any
```

Executes code with provided tools and arguments.

**Arguments**:

- `protocol_id` _str_ - The protocol identifier.
- `code` _str_ - The code to execute.
- `tools` _List[ToolLike]_ - Available tools for the code.
- `input_args` _list_ - Positional arguments.
- `input_kwargs` _dict_ - Keyword arguments.

**Returns**:

- `Any` - The result of the code execution.

#### new_conversation

```python
def new_conversation(protocol_id: str, code: str, multiround: bool,
                     tools: List[ToolLike]) -> Conversation
```

Starts a new conversation using the executor.

**Arguments**:

- `protocol_id` _str_ - The protocol identifier.
- `code` _str_ - The code to execute.
- `multiround` _bool_ - Whether multiple rounds are allowed.
- `tools` _List[ToolLike]_ - Tools allowed for execution.

**Returns**:

- `Conversation` - A conversation object for execution.

## UnsafeExecutor Objects

```python
class UnsafeExecutor(Executor)
```

Executes code in an unsafe environment, allowing unrestricted operations.

#### \_\_call\_\_

```python
def __call__(protocol_id: str, code: str, tools: List[ToolLike],
             input_args: list, input_kwargs: dict) -> Any
```

Executes code using Python&#x27;s importlib without restrictions.

**Arguments**:

- `protocol_id` _str_ - The protocol identifier.
- `code` _str_ - The code to execute.
- `tools` _List[ToolLike]_ - Tools available to the executed code.
- `input_args` _list_ - Positional arguments.
- `input_kwargs` _dict_ - Keyword arguments.

**Returns**:

- `Any` - The result of the executed code.

## RestrictedExecutor Objects

```python
class RestrictedExecutor(Executor)
```

Executes code in a restricted environment to ensure safety.

#### \_\_call\_\_

```python
def __call__(protocol_id: str, code: str, tools: List[ToolLike],
             input_args: list, input_kwargs: dict) -> Any
```

Executes the code using a restricted interpreter with limited globals.

**Arguments**:

- `protocol_id` _str_ - The protocol identifier.
- `code` _str_ - The code to execute.
- `tools` _List[ToolLike]_ - Tools allowed in the environment.
- `input_args` _list_ - Positional arguments for the function.
- `input_kwargs` _dict_ - Keyword arguments for the function.

**Returns**:

- `Any` - The result of the execution.

## ExecutorConversation Objects

```python
class ExecutorConversation(Conversation)
```

Handles conversations by executing code via the associated executor.

#### \_\_init\_\_

```python
def __init__(executor: Executor, protocol_id: str, code: str, multiround: bool,
             tools: List[ToolLike]) -> None
```

Initializes ExecutorConversation.

**Arguments**:

- `executor` _Executor_ - The executor used for code execution.
- `protocol_id` _str_ - The identifier of the protocol.
- `code` _str_ - The code to be executed.
- `multiround` _bool_ - Whether multiple rounds are allowed.
- `tools` _List[ToolLike]_ - Tools allowed for execution.

#### \_\_call\_\_

```python
def __call__(message: str, print_output: bool = True) -> Any
```

Processes a message by executing the implementation code.

**Arguments**:

- `message` _str_ - The input message for the conversation.
- `print_output` _bool_ - Whether to print the result.

**Returns**:

- `Any` - The output from the execution of the code.
