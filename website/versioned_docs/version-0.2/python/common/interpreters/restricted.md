---
sidebar_label: restricted
title: agora.common.interpreters.restricted
---

#### execute_restricted

```python
def execute_restricted(code: str,
                       extra_globals: Optional[dict] = None,
                       supported_imports: Optional[List[str]] = None,
                       function_name: str = 'run',
                       input_args: Optional[List[Any]] = None,
                       input_kwargs: Optional[dict] = None) -> Any
```

Executes restricted code with limited globals and supported imports.

**Arguments**:

- `code` _str_ - The code to execute.
- `extra_globals` _Optional[dict]_ - Additional global variables.
- `supported_imports` _Optional[List[str]]_ - List of allowed modules.
- `function_name` _str_ - The name of the function to execute.
- `input_args` _Optional[List[Any]]_ - Positional arguments for the function.
- `input_kwargs` _Optional[dict]_ - Keyword arguments for the function.

**Returns**:

- `Any` - The result of the executed function.

**Raises**:

- `ExecutionError` - If an unsupported import is attempted or multiple results are registered.
