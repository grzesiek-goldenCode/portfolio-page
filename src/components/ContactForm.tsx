"use client";

import { useTransition, useState, useRef } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    //Convert all fields to string
    const data = Object.fromEntries(
      [...formData.entries()].map(([k, v]) => [k, v.toString()])
    );

    if (
      data.name.slice().length === 0 ||
      data.email.slice().length === 0 ||
      data.message.slice().length === 0
    ) {
      setFormError(true);
      setTimeout(() => setFormError(false), 3000);
      return;
    }
    if (!data.email.includes("@") || !data.email.includes(".")) {
      toast.error("Niepoprawny adres email!");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok) {
          console.log(result.error);
          console.log(result.error.statusCode);
          if (result.error.statusCode === 422) {
            toast.error("Niepoprawny adres email!");
          } else {
            toast.error("Wystąpił nieoczekiwany błąd!");
          }
          return;
        }
        toast.success("Wiadomość wysłana!");
        formRef.current?.reset();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      } catch (err) {
        console.log(err);
      }
    });
  }
  return (
    <form
      className="flex flex-col justify-center items-center w-full lg:w-[80%] px-10 lg:px-30"
      onSubmit={handleSend}
      ref={formRef}
    >
      <input
        name="name"
        type="text"
        placeholder="Imię"
        className="input-element"
        maxLength={30}
        required
      />
      <input
        name="email"
        type="text"
        placeholder="Twój adres email"
        className="input-element"
        maxLength={100}
        required
      />
      <textarea
        name="message"
        placeholder="Wpisz swoją wiadomość"
        className="border p-2 m-2 rounded-lg border-gray-100 focus:border-black w-full h-36 resize-none mb-4"
        required
      />
      {formError && (
        <p className="text-md text-red-500 pb-5">
          Uzupełnij wszystkie pola aby wysłać wiadomość
        </p>
      )}
      <button
        className={`relative flex h-12 w-[60%] cursor-pointer items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-white tracking-[0.015em] transition-all duration-300
         before:absolute before:inset-0 before:rounded-lg
         before:bg-linear-to-r before:from-fuchsia-500 before:to-indigo-800
         before:opacity-0 before:transition-opacity before:duration-300
         hover:before:opacity-100  overflow-visible  `}
      >
        {sent && (
          <span className="pointer-events-none absolute -inset-2 rounded-xl border-20 border-indigo-400 before::animate-glow blur-md -z-10 transition-all duration-700"></span>
        )}
        {isPending ? (
          <span className="relative z-10 loader"></span>
        ) : (
          <span className={`relative z-10 `}>
            {sent ? "Wiadomość wysłana" : "Prześlij wiadomość!"}
          </span>
        )}
      </button>
    </form>
  );
}
