---
sidebar_label: core
title: agora.sender.core
---

## Sender Objects

```python
class Sender()
```

Main Sender class responsible for orchestrating protocols, components, and memory.

#### \_\_init\_\_

```python
def __init__(memory: SenderMemory,
             protocol_picker: ProtocolPicker,
             negotiator: SenderNegotiator,
             programmer: SenderProgrammer,
             executor: Executor,
             querier: Querier,
             transporter: SenderTransporter,
             protocol_threshold: int = 5,
             negotiation_threshold: int = 10,
             implementation_threshold: int = 5)
```

Initialize the Sender with the necessary components and thresholds.

**Arguments**:

- `memory` _SenderMemory_ - Memory component for storing protocols and task conversations.
- `protocol_picker` _ProtocolPicker_ - Component responsible for selecting protocols.
- `negotiator` _SenderNegotiator_ - Handles negotiation of protocols.
- `programmer` _SenderProgrammer_ - Generates protocol implementations.
- `executor` _Executor_ - Executes protocol implementations.
- `querier` _Querier_ - Manages querying external services.
- `transporter` _SenderTransporter_ - Handles the transportation of messages.
- `protocol_threshold` _int, optional_ - Minimum number of conversations to check existing protocols and see if one is suitable. Defaults to 5.
- `negotiation_threshold` _int, optional_ - Minimum number of conversations to negotiate a new protocol. Defaults to 10.
- `implementation_threshold` _int, optional_ - Minimum number of conversations using a protocol to write an implementation. Defaults to 5.

#### make_default

```python
@staticmethod
def make_default(toolformer,
                 storage: Storage = None,
                 protocol_picker: ProtocolPicker = None,
                 negotiator: SenderNegotiator = None,
                 programmer: SenderProgrammer = None,
                 executor: Executor = None,
                 querier: Querier = None,
                 transporter: SenderTransporter = None,
                 storage_path: str = './.agora/storage/sender.json',
                 protocol_threshold: int = 5,
                 negotiation_threshold: int = 10,
                 implementation_threshold: int = 5)
```

Create a default Sender instance with optional custom components.

**Arguments**:

- `toolformer` - The toolformer instance to use for creating components.
- `storage` _Storage, optional_ - Custom storage backend. Defaults to None.
- `protocol_picker` _ProtocolPicker, optional_ - Custom protocol picker. Defaults to None.
- `negotiator` _SenderNegotiator, optional_ - Custom negotiator. Defaults to None.
- `programmer` _SenderProgrammer, optional_ - Custom programmer. Defaults to None.
- `executor` _Executor, optional_ - Custom executor. Defaults to None.
- `querier` _Querier, optional_ - Custom querier. Defaults to None.
- `transporter` _SenderTransporter, optional_ - Custom transporter. Defaults to None.
- `storage_path` _str, optional_ - Path to the storage file. Defaults to &#x27;./sender_storage.json&#x27;.
- `protocol_threshold` _int, optional_ - Minimum number of conversations to check existing protocols and see if one is suitable. Defaults to 5.
- `storage`0 _int, optional_ - Minimum number of conversations to negotiate a new protocol. Defaults to 10.
- `storage`1 _int, optional_ - Minimum number of conversations using a protocol to write an implementation. Defaults to 5.

**Returns**:

- `storage`2 - A configured Sender instance.

#### execute_task

```python
def execute_task(task_id: str,
                 task_schema: TaskSchemaLike,
                 task_data: dict,
                 target: str,
                 force_no_protocol: bool = False,
                 force_llm: bool = False) -> Any
```

Execute a task by selecting and running an appropriate protocol or falling back to querying.

**Arguments**:

- `task_id` _str_ - The identifier of the task.
- `task_schema` _TaskSchemaLike_ - The schema of the task to be performed.
- `task_data` - The data required for the task.
- `target` _str_ - The target for which the task is being executed.
- `force_no_protocol` _bool, optional_ - If True, forces execution without a protocol. Defaults to False.
- `force_llm` _bool, optional_ - If True, forces execution using a language model. Defaults to False.

**Returns**:

- `Any` - The result of the task execution.

#### task

```python
def task(task_id: Optional[str] = None,
         description: Optional[str] = None,
         input_schema: Optional[dict] = None,
         output_schema: Optional[dict] = None,
         schema_generator: Optional[TaskSchemaGenerator] = None)
```

Decorator to define a task with optional schemas and description.

**Arguments**:

- `task_id` _str, optional_ - The identifier of the task. Defaults to None.
- `description` _str, optional_ - A brief description of the task. Defaults to None.
- `input_schema` _dict, optional_ - The input schema for the task. Defaults to None.
- `output_schema` _dict, optional_ - The output schema for the task. Defaults to None.
- `schema_generator` _TaskSchemaGenerator, optional_ - A generator to fill in missing schema fields. Defaults to None.

**Returns**:

- `Callable` - The decorated function.
