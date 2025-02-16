---
sidebar_label: storage
title: agora.common.storage
---

## Storage Objects

```python
class Storage(ABC, MutableMapping)
```

Abstract base class for a key-value storage.

This class extends both the &#x27;ABC&#x27; class and the &#x27;MutableMapping&#x27; interface.

#### save_memory

```python
@abstractmethod
def save_memory() -> None
```

Saves current state to the underlying storage mechanism.

#### load_memory

```python
@abstractmethod
def load_memory() -> None
```

Loads state from the underlying storage mechanism.

## JSONStorage Objects

```python
class JSONStorage(Storage)
```

A JSON-based storage implementation.

#### \_\_init\_\_

```python
def __init__(storage_path: str, autosave: bool = True) -> None
```

Instantiates JSONStorage.

**Arguments**:

- `storage_path` _str_ - Path to the JSON file.
- `autosave` _bool_ - If True, saves automatically after updates.

#### save_memory

```python
def save_memory() -> None
```

Saves current state to the JSON file.

#### load_memory

```python
def load_memory() -> None
```

Loads the state from the JSON file.

#### \_\_getitem\_\_

```python
def __getitem__(key: str) -> Any
```

Retrieves an item by key.

**Arguments**:

- `key` _str_ - Key to retrieve.

**Returns**:

- `Any` - The stored value or None if not found.

#### \_\_setitem\_\_

```python
def __setitem__(key: str, value: Any) -> None
```

Sets a value for the specified key.

**Arguments**:

- `key` _str_ - Key to modify.
- `value` _Any_ - The data to store.

#### \_\_delitem\_\_

```python
def __delitem__(key: str) -> None
```

Deletes the entry associated with the specified key.

**Arguments**:

- `key` _str_ - Key to delete.

#### \_\_iter\_\_

```python
def __iter__() -> Iterator[str]
```

Iterates over stored keys.

**Returns**:

- `Iterator[str]` - An iterator over the keys.

#### \_\_len\_\_

```python
def __len__() -> int
```

Returns the number of stored items.

**Returns**:

- `int` - The count of items.

#### \_\_contains\_\_

```python
def __contains__(key: object) -> bool
```

Checks if a key is contained.

**Arguments**:

- `key` _object_ - Key to check.

**Returns**:

- `bool` - True if the key exists, False otherwise.

#### \_\_str\_\_

```python
def __str__() -> str
```

Returns a string representation of this storage.

**Returns**:

- `str` - String describing the JSONStorage path.
