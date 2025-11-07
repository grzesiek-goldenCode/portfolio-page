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
      <button className="flex h-12 w-[60%] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <span>Prześlij wiadomość!</span>
      </button>
    </form>
  );
}
