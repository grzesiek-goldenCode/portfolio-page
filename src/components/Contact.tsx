import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="w-[40vw] section-container">
        <h3 className="text-2xl mb-2 mt-20 font-bold">Kontakt</h3>
        <p className="text-lg mb-10">
          Masz na myśli jakiś projekt lub powiedzieć cześć? Miło mi będzie jak
          się odezwiesz:
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
