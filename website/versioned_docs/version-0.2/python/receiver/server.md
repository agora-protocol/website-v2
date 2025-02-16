---
sidebar_label: server
title: agora.receiver.server
---

## ReceiverServer Objects

```python
class ReceiverServer()
```

Handles and manages HTTP conversations via Flask with a given Receiver.

This class sets up Flask routes for handling conversation requests
using the provided Receiver instance.

#### \_\_init\_\_

```python
def __init__(receiver: 'Receiver') -> None
```

Initializes the server with a Receiver instance.

**Arguments**:

- `receiver` _Receiver_ - The receiver that creates new conversations.

#### run

```python
def run(*args, **kwargs) -> None
```

Runs the Flask application.

**Arguments**:

- `*args` - Positional arguments for Flask&#x27;s run method.
- `**kwargs` - Keyword arguments for Flask&#x27;s run method.
