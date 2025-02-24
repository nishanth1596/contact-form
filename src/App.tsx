import ContactForm from "./Components/ContactForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <header className="sr-only">
        <h1>Contact Form</h1>
      </header>
      <main className="mx-4 my-8 flex justify-center">
        <ContactForm />
      </main>

      <footer className="text-Grey-900 animate-pulse text-center">
        Challenge by{""}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded with 💜 by{" "}
        <a href="https://www.frontendmentor.io/profile/nishanth1596">
          Nishanth Venkatesan
        </a>
        .
      </footer>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
