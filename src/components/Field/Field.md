Field component examples

```jsx
<Field
  label="Given Name"
  name="name"
  onFieldChange={(result) => console.log(result.name, result.value)}
  type="text"
  value="Neil"
  placeholder="Enter your given name..."
/>
<Field
  label="Last Name"
  name="lastName"
  type="text"
  onFieldChange={(result) => console.log(result.name, result.value)}
  placeholder="Enter your last name..."
/>
<Field
  label="Email"
  name="email"
  type="email"
  onFieldChange={(result) => console.log(result.name, result.value)}
  placeholder="Enter your email..."
  errorMsg="Field is required."
/>
<Field
  label="Email"
  name="email"
  type="email"
  onFieldChange={(result) => console.log(result.name, result.value)}
  placeholder="Enter your email..."
  disabled
/>
```

Form default example

```jsx
import Btn from '../Btn'
import Heading from '../Type/Heading'
;<form>
  <Field
    label="Username or email"
    name="username"
    onFieldChange={result => console.log(result.name, result.value)}
    type="text"
    placeholder="i.e. go.social"
  />
  <br />
  <Field
    label="Password"
    name="password"
    type="password"
    onFieldChange={result => console.log(result.name, result.value)}
    placeholder="Keep it secure..."
  />
  <br />
  <Btn>Log In</Btn>
</form>
```

Centered and expanding form fields example

```jsx
import Btn from '../Btn'
import Heading from '../Type/Heading'
;<form style={{ boxSizing: 'border-box', margin: '0 auto' }}>
  <Heading level={3}>Welcome back!</Heading>
  <Field
    variants="grow"
    label="Username or email"
    name="username"
    onFieldChange={result => console.log(result.name, result.value)}
    type="text"
    placeholder="i.e. go.social"
  />
  <br />
  <Field
    variants="grow"
    label="Password"
    name="password"
    type="password"
    onFieldChange={result => console.log(result.name, result.value)}
    placeholder="Keep it secure..."
  />
  <br />
  <Btn variants="grow main">Log In</Btn>
</form>
```
