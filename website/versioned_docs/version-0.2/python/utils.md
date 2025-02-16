---
sidebar_label: utils
title: agora.utils
---

#### extract_substring

```python
def extract_substring(text: str,
                      start_tag: str,
                      end_tag: str,
                      include_tags=True) -> Optional[str]
```

Extracts a substring from the given text, bounded by start_tag and end_tag.
Case insensitive.

**Arguments**:

- `text` _str_ - The source string.
- `start_tag` _str_ - The beginning delimiter.
- `end_tag` _str_ - The ending delimiter.
- `include_tags` _bool_ - Whether to include the tags in the result. Defaults to True.

**Returns**:

- `Optional[str]` - The extracted substring or None if not found.

#### compute_hash

```python
def compute_hash(s: str) -> str
```

Computes a hash of the given string.

**Arguments**:

- `s` _str_ - The input string to hash.

**Returns**:

- `str` - The resulting hash as a Base64-encoded string.

#### extract_metadata

```python
def extract_metadata(text: str) -> dict
```

Extracts metadata from the given text in YAML format.

**Arguments**:

- `text` _str_ - The source text containing YAML metadata.

**Returns**:

- `dict` - A dictionary of extracted metadata.

#### encode_as_data_uri

```python
def encode_as_data_uri(text: str) -> str
```

Encodes the given text as a data URI.

**Arguments**:

- `text` _str_ - The text to encode.

**Returns**:

- `str` - The encoded data URI.

#### download_and_verify_protocol

```python
def download_and_verify_protocol(protocol_hash: str,
                                 protocol_source: str,
                                 timeout: int = 10000) -> Optional[str]
```

Downloads a protocol from a source or decodes it if it&#x27;s a data URI, then verifies its hash.

**Arguments**:

- `protocol_hash` _str_ - The expected hash of the protocol.
- `protocol_source` _str_ - The protocol&#x27;s location (URL or data URI).
- `timeout` _int_ - The request timeout in milliseconds.

**Returns**:

- `Optional[str]` - The protocol text if hash verification passes, otherwise None.
