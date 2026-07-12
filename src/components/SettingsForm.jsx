import { useState } from "react";
import "../styles/SettingsForm.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function SettingsForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (values) => {
    const err = {};

    if (!values.name.trim()) {
      err.name = "Name is required.";
    }

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      err.email = "Enter a valid email.";
    }

    if (values.password.length < 8) {
      err.password = "Password must be at least 8 characters.";
    }

    return err;
  };

  const handleChange = (e) => {
    const updated = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updated);
    setErrors(validate(updated));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate(form);

    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setSuccess(true);
    }
  };

  const isValid =
    Object.keys(validate(form)).length === 0;

  return (
    <div className="settings-card">
      <h2>Profile Settings</h2>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
        />

        {errors.name && (
          <small>{errors.name}</small>
        )}

        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />

        {errors.email && (
          <small>{errors.email}</small>
        )}

        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          aria-invalid={!!errors.password}
        />

        {errors.password && (
          <small>{errors.password}</small>
        )}

        <button
          type="submit"
          disabled={!isValid}
        >
          Save Settings
        </button>

        {success && (
          <p>
            Settings saved successfully.
          </p>
        )}
      </form>
    </div>
  );
}