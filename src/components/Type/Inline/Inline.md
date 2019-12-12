To mark text.

```jsx
import Txt from '../Txt'
;<Txt>
  The <mark className="Inline mark">quick brown fox</mark> jumps over the lazy
  dog.
</Txt>
```

To make text **strong**.

```jsx
import Txt from '../Txt'
;<Txt>
  The <strong className="Inline strong">quick brown fox</strong> jumps over the
  lazy dog.
</Txt>
```

To make text _emphasize_.

```jsx
import Txt from '../Txt'
;<Txt>
  The <em className="Inline emphasize">quick brown fox</em> jumps over the lazy
  dog.
</Txt>
```

Some of text transforms:

```jsx
import Txt from '../Txt'
;<Txt>
  <del className="Inline del">
    Identify text that has been deleted from a document but retained to show the
    history of modifications made to the document.
  </del>
</Txt>
```

```jsx
import Txt from '../Txt'
;<Txt>
  <s className="Inline strikethrough">
    Element is used to identify text that is no longer accurate or relevant.
  </s>
</Txt>
```

```jsx
import Txt from '../Txt'
;<Txt>
  <ins className="Inline insert">
    Identify text that has been inserted into a document.
  </ins>
</Txt>
```

```jsx
import Txt from '../Txt'
;<Txt>
  <u className="Inline underline">
    This line of text will render as underlined.
  </u>
</Txt>
```

```jsx
import Txt from '../Txt'
;<Txt>
  <small className="Inline small">
    This line of text is meant to be treated as fine print.
  </small>
</Txt>
```
