---
sidebar_label: querier
title: agora.sender.components.querier
---

#### PROTOCOL_QUERIER_PROMPT

\

#### construct_query_description

```python
def construct_query_description(protocol_document: str,
                                task_schema: TaskSchemaLike,
                                task_data: Any) -> str
```

Constructs a query description for the protocol and task.

**Arguments**:

- `protocol_document` _str_ - The protocol document text.
- `task_schema` _TaskSchemaLike_ - The schema for the task.
- `task_data` _Any_ - The data for the task.

**Returns**:

- `str` - The constructed query description.

#### parse_and_handle_query

```python
def parse_and_handle_query(query: str, callback: Callable[[str], Dict]) -> str
```

Parses and processes a query by calling the given callback.

**Arguments**:

- `query` _str_ - The query to be processed.
- `callback` _Callable[[str], Dict]_ - The function that processes the query.

**Returns**:

- `str` - The response from the callback or error information.

## Querier Objects

```python
class Querier()
```

Handles querying external services based on protocol documents and task schemas.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer,
             max_queries: int = 5,
             max_messages: int = None,
             force_query: bool = True)
```

Initializes the Querier with the given toolformer and query/message limits.

**Arguments**:

- `toolformer` _Toolformer_ - The Toolformer instance managing tools and conversations.
- `max_queries` _int, optional_ - Maximum number of queries allowed. Defaults to 5.
- `max_messages` _int, optional_ - Maximum number of messages allowed. If None, set to max_queries \* 2. Defaults to None.
- `force_query` _bool, optional_ - Whether to enforce sending a query before output. Defaults to True.

#### handle_conversation

```python
def handle_conversation(prompt: str, message: str, output_schema: dict,
                        callback: Callable[[str], Dict]) -> str
```

Manages the conversation flow for handling queries and delivering outputs.

**Arguments**:

- `prompt` _str_ - The initial prompt for the conversation.
- `message` _str_ - The message to process in the conversation.
- `output_schema` _dict_ - The schema defining the structure of the expected output.
- `callback` _Callable[[str], Dict]_ - A callback function to handle query responses.

**Returns**:

- `str` - The structured output produced by the conversation.

#### \_\_call\_\_

```python
def __call__(task_schema: TaskSchemaLike, task_data: Any,
             protocol_document: str, callback: Callable[[str], Dict]) -> str
```

Executes the querying process based on task schema and protocol document.

**Arguments**:

- `task_schema` _TaskSchemaLike_ - The schema of the task to be performed.
- `task_data` _Any_ - The data associated with the task.
- `protocol_document` _str_ - The document defining the protocol for querying.
- `callback` - A callback function to handle query responses.

**Returns**:

- `str` - The structured output resulting from the querying process.
