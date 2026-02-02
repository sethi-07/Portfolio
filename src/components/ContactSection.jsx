import { GithubIcon, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { connector } from "../lib/utils";
import toast from "react-hot-toast";
import { CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Successfully submitted", {
        icon: <CheckCircle2 className="text-primary" size={20} />,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left"> Email</h4>
                  <a
                    target="_blank"
                    href="mailto:abhinandansethi07@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    abhinandansethi07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GithubIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left"> Github</h4>
                  <a
                    target="_blank"
                    href="https://github.com/sethi-07"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    sethi-07
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full py-3 px-4 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder=" John Doe"
                ></input>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full py-3 px-4 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder=" john@example.com"
                ></input>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full py-3 px-4 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder=" Your message here..."
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="submit"
                className={connector(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Sending" : "Send Message"}
                <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
