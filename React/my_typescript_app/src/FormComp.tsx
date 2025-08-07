import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

function FormComp() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <div>
      <h2>User Form:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Name"
          /><br />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email"
          /><br />
          <hr />
        </div>
        <button type="submit">Submit</button>
      </form>

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default FormComp;
