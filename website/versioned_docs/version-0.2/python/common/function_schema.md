---
sidebar_label: function_schema
title: agora.common.function_schema
---

#### copy_func

```python
def copy_func(func: Callable) -> Callable
```

Create a deep copy of a function.

**Arguments**:

- `func` _Callable_ - The function to be copied.

**Returns**:

- `Callable` - A new function that is a deep copy of the original.

#### add_annotations_from_docstring

```python
def add_annotations_from_docstring(func: Callable,
                                   known_types: dict = DEFAULT_KNOWN_TYPES
                                   ) -> Callable
```

Add annotations derived from Google-style docstrings to the given function.

**Arguments**:

- `func` _Callable_ - The function to be processed.
- `known_types` _dict, optional_ - A dictionary mapping type names to Python types.

**Returns**:

- `Callable` - The function with updated annotations.

#### schema_from_function

```python
def schema_from_function(func: Callable,
                         strict: bool = False,
                         known_types: dict = DEFAULT_KNOWN_TYPES) -> dict
```

Create an OpenAI-like JSON schema from a function&#x27;s signature and docstring.

**Arguments**:

- `func` _Callable_ - The function to generate the schema from.
- `strict` _bool, optional_ - Enforce strict parsing and annotation requirements.
- `known_types` _dict, optional_ - A dictionary mapping type names to Python types.

**Returns**:

- `dict` - A JSON schema representing the function&#x27;s parameters and return.

#### generate_docstring

```python
def generate_docstring(
        description: str, params: Optional[Dict[str, Tuple[Optional[type],
                                                           Optional[str]]]],
        returns: Optional[Tuple[Optional[type], Optional[str]]]) -> str
```

Generate a docstring from a description, parameters, and return type.

**Arguments**:

- `description` _str_ - The description of the function.
- `params` _Optional[Dict[str, Tuple[Optional[type], Optional[str]]]_ - A mapping of parameter names to type/description tuples.
- `returns` _Optional[Tuple[Optional[type], Optional[str]]]_ - The return type and description.

**Returns**:

- `str` - The generated docstring.

#### set_params_and_annotations

```python
def set_params_and_annotations(name: str, docstring: str,
                               params: Dict[str, Tuple[Optional[type],
                                                       Optional[str]]],
                               return_type: Optional[type]) -> Callable
```

Decorator to set parameters and annotations on a function based on the given schema data.

**Arguments**:

- `name` _str_ - The name of the function.
- `docstring` _str_ - The function&#x27;s docstring.
- `params` _dict_ - A mapping of parameter names to type/description tuples.
- `return_type` _Optional[type]_ - The function&#x27;s return type.

**Returns**:

- `Callable` - The wrapped function with updated signature and docstring.
