import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    client
      .signup(data.email, data.password)
      .then((res) => console.log(res))
      .catch((error) => setError(error.message))
  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>Signup Page</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}

export default SignupPage
