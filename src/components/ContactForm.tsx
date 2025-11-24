export default function ContactForm() {
  return (
    <form className="flex flex-col justify-center items-center w-[80%] px-30">
      <input
        name="name"
        placeholder="Imię"
        className="input-element"
        maxLength={30}
      />
      <input
        name="email"
        placeholder="Twój adres email"
        className="input-element"
        maxLength={100}
      />
      <textarea
        name="message"
        placeholder="Wpisz swoją wiadomość"
        className="border p-2 m-2 rounded-lg border-gray-100 focus:border-black w-full h-36 resize-none mb-4"
      />
      <button
        className="relative flex h-12 w-[60%] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white tracking-[0.015em] transition-all duration-300
         before:absolute before:inset-0 before:rounded-lg
         before:bg-linear-to-r before:from-fuchsia-500 before:to-indigo-800
         before:opacity-0 before:transition-opacity before:duration-300
         hover:before:opacity-100"
      >
        <span className="relative z-10">Prześlij wiadomość!</span>
      </button>
    </form>
  );
}
