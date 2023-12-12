import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <Form>
      <label htmlFor="login" className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email or username</span>
        </div>
        <input
          type="text"
          name="login"
          id="login"
          placeholder="user@example.com"
          className="input input-bordered w-full max-w-xs"
          autoComplete="username"
          required
        />
      </label>

      <label htmlFor="password" className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          className="input input-bordered w-full max-w-xs"
          autoComplete="current-password"
          required
        />
      </label>

      <button className="btn btn-primary btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2">Login</button>
    </Form>
  );
}
