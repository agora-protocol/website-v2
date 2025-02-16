---
sidebar_label: errors
title: agora.common.errors
---

## ProtocolError Objects

```python
class ProtocolError(Exception)
```

Base exception class for protocol-related errors.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes the ProtocolError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## ExecutionError Objects

```python
class ExecutionError(Exception)
```

Exception raised for errors during the internal execution of routines and toolformers.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes the ExecutionError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## StorageError Objects

```python
class StorageError(Exception)
```

Exception raised for storage-related issues.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes the StorageError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## SchemaError Objects

```python
class SchemaError(Exception)
```

Exception raised for schema validation errors.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes the SchemaError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## ProtocolRejectedError Objects

```python
class ProtocolRejectedError(ProtocolError)
```

Exception raised when a protocol is rejected.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes ProtocolRejectedError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to &#x27;Protocol rejected&#x27; if empty.

## ProtocolNotFoundError Objects

```python
class ProtocolNotFoundError(ProtocolError)
```

Exception raised when a protocol is not found.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes ProtocolNotFoundError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## ProtocolRetrievalError Objects

```python
class ProtocolRetrievalError(ProtocolError)
```

Exception raised when retrieving a protocol fails.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes ProtocolRetrievalError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.

## ProtocolTransportError Objects

```python
class ProtocolTransportError(ProtocolError)
```

Exception raised for transport-related protocol errors.

#### \_\_init\_\_

```python
def __init__(message: str = '')
```

Initializes ProtocolTransportError with an optional message.

**Arguments**:

- `message` _str, optional_ - The error message. Defaults to an empty string.
