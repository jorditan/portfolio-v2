import { useState } from "react";
import toast from "react-hot-toast";

function MyForm() {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    phone: "",
  });

  const canSend =
    formData.message !== "" && formData.email !== "" && formData.phone !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitMail = (e) => {
    e.preventDefault();
    toast.success("Correo enviado con éxito");
  };

  return (
    <>
      <form
        onSubmit={submitMail}
        className="max-w-md mx-auto flex gap-4 flex-col"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium gap-4 dark:text-[#fafafa] text-gray-600"
          >
            Ingresar correo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="helper-text-explanation"
            className="email border dark:border-gray-700 border-gray-900 border-2 dark:border-1 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-800 bg-gray-700 text-sm rounded-lg focus:ring-[#3fb6ea] block w-full p-2.5 placeholder-gray-400 :text-[#fafafa] dark:focus:border-[#3fb6ea] focus:border-sky-500"
            placeholder="Ejemplo: tucorreo@gmail.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium gap-4 dark:text-[#fafafa] text-gray-600"
          >
            Número de teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{2}-[0-9]{4}[0-9]{4}"
            className="phone block p-2.5 w-full border rounded-lg dark:border-gray-700 border-gray-900 border-2 dark:border-1 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-800 bg-gray-700 text-sm focus:ring-[#3fb6ea] placeholder-gray-400 text-[#fafafa] dark:focus:border-[#3fb6ea] focus:border-sky-500"
            placeholder="Formato: 11-12345678"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium dark:text-[#fafafa] text-gray-600"
          >
            Ingresar tu mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`message block p-2.5 w-full dark:border-gray-700 border-gray-900 border-2 dark:border-1 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-800 bg-gray-700 text-sm rounded-lg focus:ring-[#3fb6ea] placeholder-gray-400 text-[#fafafa]  dark:focus:border-[#3fb6ea] focus:border-sky-500`}
            placeholder="Ejemplo: Me gustaría ponerme en contacto para..."
          />
        </div>

        <button
          type="submit"
          disabled={!canSend}
          className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  w-full focus:ring-4 ${
            canSend
              ? "focus:ring-sky-600 dark:focus:ring-blue-300 text-white dark:bg-sky-600 bg-sky-600 hover:bg-sky-400 dark:hover:bg-sky-400 focus:ring-4"
              : "cursor-not-allowed bg-gray-400 text-gray-300"
          }`}
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default MyForm;
