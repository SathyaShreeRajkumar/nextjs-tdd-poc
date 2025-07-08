import { CONTACT_CONST } from "@/constants/app-constants";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{CONTACT_CONST.CONTACT_US}</h1>
      <ContactForm />
    </div>
  );
}
