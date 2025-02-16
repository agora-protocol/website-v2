---
sidebar_label: schema_generator
title: agora.sender.schema_generator
---

## TaskSchemaGenerator Objects

```python
class TaskSchemaGenerator()
```

Toolformer-based task schema generation.

#### \_\_init\_\_

```python
def __init__(toolformer: Toolformer)
```

Initialize the SchemaGenerator.

**Arguments**:

- `toolformer` _Toolformer_ - The toolformer to use for schema generation.

#### from_function

```python
def from_function(func: Callable,
                  description: str = None,
                  input_schema: dict = None,
                  output_schema: dict = None) -> TaskSchema
```

Generate a TaskSchema schema from a function.
Unlike TaskSchema.from_function, this method supports generating schemas from functions without type hints.

**Arguments**:

- `func` _Callable_ - The function to generate the schema from.
- `description` _str, optional_ - If not None, overrides the generated description. Defaults to None.
- `input_schema` _dict, optional_ - If not None, overrides the generated input schema. Defaults to None.
- `output_schema` _dict, optional_ - If not None, overrides the generated output schema. Defaults to None.

**Returns**:

- `TaskSchema` - The generated schema.

#### from_text

```python
def from_text(text: str,
              description: str = None,
              input_schema: dict = None,
              output_schema: dict = None) -> TaskSchema
```

Generate a JSON schema from a textual description.

**Arguments**:

- `text` _str_ - The description of the task.
- `description` _str, optional_ - If not None, overrides the generated description. Defaults to None.
- `input_schema` _dict, optional_ - If not None, overrides the generated input schema. Defaults to None.
- `output_schema` _dict, optional_ - If not None, overrides the generated output schema. Defaults to None.

**Returns**:

- `TaskSchema` - The generated schema.
