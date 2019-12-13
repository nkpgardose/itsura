Select list of options.

```jsx
<Select
  label="Select Colors"
  name="colors"
  onSelectionChange={result => {
    console.log(result.name, result.value)
  }}
  options={[{ value: 'red', label: 'Red' }]}
/>
```

Simple example for select in a form.

```jsx
import Btn from '../Btn'
import Heading from '../Type/Heading'
import Field from '../Field'

;<form style={{ boxSizing: 'border-box', margin: '0 auto' }}>
  <Heading level={3}>Welcome back!</Heading>
  <Field
    variants="grow"
    label="Name of the store"
    name="store"
    onFieldChange={result => console.log(result.name, result.value)}
    type="text"
    placeholder="Puregold, Coles, etc..."
  />
  <br />
  <Select
    variants="grow"
    label="Select Fruits"
    name="fruits"
    onSelectionChange={result => {
      console.log(result.name, result.value)
    }}
    options={[
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' }
    ]}
  />
  <br />
  <Btn variants="grow main">Submit</Btn>
</form>
```
