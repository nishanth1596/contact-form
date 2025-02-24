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
      <footer></footer>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
