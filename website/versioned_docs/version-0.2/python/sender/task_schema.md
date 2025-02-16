---
sidebar_label: task_schema
title: agora.sender.task_schema
---

## TaskSchema Objects

```python
class TaskSchema(Mapping)
```

Defines the schema for a task, including description and input/output schemas.

#### \_\_init\_\_

```python
def __init__(description: Optional[str], input_schema: Optional[dict],
             output_schema: Optional[dict])
```

Initializes the TaskSchema.

**Arguments**:

- `description` _Optional[str]_ - A description of the task.
- `input_schema` _Optional[dict]_ - The JSON schema of the input data.
- `output_schema` _Optional[dict]_ - The JSON schema of the output data.

#### from_json

```python
@staticmethod
def from_json(json_dict: dict) -> 'TaskSchema'
```

Creates a TaskSchema from a JSON dictionary.

**Arguments**:

- `json_dict` _dict_ - The JSON dictionary containing task schema details.

**Returns**:

- `TaskSchema` - An instance of TaskSchema based on the provided JSON.

**Raises**:

- `SchemaError` - If required fields are missing in the JSON dictionary.

#### to_json

```python
def to_json() -> dict
```

Converts the TaskSchema to a JSON dictionary.

**Returns**:

- `dict` - The JSON representation of the TaskSchema.

#### from_function

```python
@staticmethod
def from_function(
        func: Callable,
        description: Optional[str] = None,
        input_schema: Optional[dict] = None,
        output_schema: Optional[dict] = None,
        generator: Optional['TaskSchemaGenerator'] = None) -> 'TaskSchema'
```

Creates a TaskSchema from a function, inferring schemas if necessary.

**Arguments**:

- `func` _Callable_ - The function to infer the schema from.
- `description` _Optional[str], optional_ - Overrides the task description. Defaults to None.
- `input_schema` _Optional[dict], optional_ - Overrides the input schema. Defaults to None.
- `output_schema` _Optional[dict], optional_ - Overrides the output schema. Defaults to None.
- `generator` _Optional[TaskSchemaGenerator], optional_ - Used to fill the fields that could not be parsed from function introspection. Defaults to None.

**Returns**:

- `TaskSchema` - An instance of TaskSchema based on the function.

#### from_taskschemalike

```python
@staticmethod
def from_taskschemalike(task_schema_like: 'TaskSchemaLike') -> 'TaskSchema'
```

Converts a TaskSchema-like object into a TaskSchema instance.

**Arguments**:

- `task_schema_like` _TaskSchemaLike_ - The TaskSchema-like object to convert.

**Returns**:

- `TaskSchema` - An instance of TaskSchema.

**Raises**:

- `SchemaError` - If the input is neither a TaskSchema nor a dictionary.

#### \_\_str\_\_

```python
def __str__() -> str
```

Returns the JSON string representation of the TaskSchema.

**Returns**:

- `str` - The JSON-formatted string of the TaskSchema.
