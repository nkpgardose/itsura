Disp component examples:

```jsx
<Disp title="Open Your World to New One!" subtitle="Cut Meat Using Spoon." />
```

Force 3/4 screen display and texts on centered.

**NOTE**: It uses `vh`. See more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units)

```jsx
import '../Inline'
;<Disp
  variants="cover"
  title={
    <span>
      Hello, <mark className="Inline mark">World!</mark>
    </span>
  }
  subtitle="Lorem ipsum testing."
/>
```

Center your disp

```jsx
<Disp
  variants="center"
  title="Open Your World to New One!"
  subtitle="Cut Meat Using Spoon."
/>
```
