import "./contact.css";
import { createIcons, icons } from "lucide";
const renderContact = () => {
    const contactSection = document.querySelector("#contact");

    if (!contactSection) {
        throw new Error("Contact mount point #contact was not found.");
    }

    // --------------------------------------------------
    // Contact Section Markup
    // --------------------------------------------------

    contactSection.innerHTML = `
        <section
            class="contact section"
            aria-labelledby="contact-title"
        >
            <div class="container">

                <div class="contact__layout">

                    <!-- Contact Introduction -->

                    <div class="contact__intro">

                        <p class="contact__eyebrow">
                            Contact
                        </p>

                        <h2
                            id="contact-title"
                            class="contact__title"
                        >
                            Let's build something
                            <span>meaningful.</span>
                        </h2>

                        <p class="contact__description">
                            Have an idea, project, or opportunity you'd
                            like to discuss? I'd be happy to hear from you.
                            Whether you're looking to build something new
                            or improve an existing experience, feel free
                            to get in touch.
                        </p>


                        <!-- Contact Methods -->

                        <div class="contact__methods">

                            <!-- Email -->

                            <a
                                href="mailto:emmanuelgodfrey073@gmail.com"
                                class="contact__method"
                            >
                                <span class="contact__method-icon">
                                    <i data-lucide="mail"></i>
                                </span>

                                <span class="contact__method-content">
                                    <span class="contact__method-label">
                                        Email
                                    </span>

                                    <span class="contact__method-value">
                                        emmanuelgodfrey073@gmail.com
                                    </span>
                                </span>
                            </a>


                            <!-- Phone -->

                            <a
                                href="tel:+234 901 860 2897"
                                class="contact__method"
                            >
                                <span class="contact__method-icon">
                                    <i data-lucide="phone"></i>
                                </span>

                                <span class="contact__method-content">
                                    <span class="contact__method-label">
                                        Phone
                                    </span>

                                    <span class="contact__method-value">
                                        +234 8060969645
                                    </span>
                                </span>
                            </a>


                            <!-- WhatsApp -->

                            <a
                                href="https://wa.me/2349018602897"
                                class="contact__method"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class="contact__method-icon contact__method-icon--whatsapp">
                                    WA
                                </span>

                                <span class="contact__method-content">
                                    <span class="contact__method-label">
                                        WhatsApp
                                    </span>

                                    <span class="contact__method-value">
                                        Start a conversation
                                    </span>
                                </span>
                            </a>

                        </div>


                        
<!-- Social Links -->

<div class="contact__social">

    <p class="contact__social-label">
        Connect with me
    </p>

    <div class="contact__social-links">

        <a
            href="https://github.com/JTech-del"
            class="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
        >
            <span
                class="contact__social-brand contact__social-brand--github"
            >
                GH
            </span>
        </a>

        <a
            href="#"
            class="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
        >
            <span
                class="contact__social-brand contact__social-brand--linkedin"
            >
                in
            </span>
        </a>

    </div>

</div>


<!-- CLOSE CONTACT INTRO -->
</div>


<!-- Contact Form -->

<div class="contact__form-wrapper">

    <div class="contact__form-header">

        <p class="contact__form-eyebrow">
            Send a message
        </p>

        <h3 class="contact__form-title">
            Tell me about your project.
        </h3>

    </div>


    <form
        class="contact__form"
        action="https://formspree.io/f/mljrlwlo"
        method="POST"
    >

        <!-- Name -->

        <div class="contact__field">

            <label
                for="contact-name"
                class="contact__label"
            >
                Name
            </label>

            <input
                id="contact-name"
                name="name"
                type="text"
                class="contact__input"
                placeholder="Your name"
                autocomplete="name"
                required
            />

        </div>


        <!-- Email -->

        <div class="contact__field">

            <label
                for="contact-email"
                class="contact__label"
            >
                Email
            </label>

            <input
                id="contact-email"
                name="email"
                type="email"
                class="contact__input"
                placeholder="you@example.com"
                autocomplete="email"
                required
            />

        </div>


        <!-- Subject -->

        <div class="contact__field">

            <label
                for="contact-subject"
                class="contact__label"
            >
                Subject
            </label>

            <input
                id="contact-subject"
                name="subject"
                type="text"
                class="contact__input"
                placeholder="What would you like to discuss?"
                required
            />

        </div>


        <!-- Message -->

        <div class="contact__field">

            <label
                for="contact-message"
                class="contact__label"
            >
                Message
            </label>

            <textarea
                id="contact-message"
                name="message"
                class="contact__textarea"
                placeholder="Tell me a little about your project..."
                rows="6"
                required
            ></textarea>

        </div>


        <!-- Submit -->

        <button
            type="submit"
            class="contact__submit"
        >
            <span class="contact__submit-text">
                Send Message
            </span>

            <i data-lucide="arrow-up-right"></i>
        </button>


        <!-- Form Status -->

        <p
            class="contact__form-status"
            role="status"
            aria-live="polite"
        ></p>

    </form>

</div>


                </div>

            </div>
        </section>
    `;


    // --------------------------------------------------
    // Initialize Lucide Icons
    // --------------------------------------------------

    if (window.lucide) {
        window.lucide.createIcons();
    }


    // --------------------------------------------------
    // Form Elements
    // --------------------------------------------------

    const form = contactSection.querySelector(".contact__form");
    const submitButton = contactSection.querySelector(".contact__submit");
    const submitText = contactSection.querySelector(".contact__submit-text");
    const statusMessage = contactSection.querySelector(
        ".contact__form-status",
    );


    // --------------------------------------------------
    // Form Submission
    // --------------------------------------------------

    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        submitButton.disabled = true;
        submitText.textContent = "Sending...";

        statusMessage.textContent = "";
        statusMessage.className = "contact__form-status";


        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            });


            if (!response.ok) {
                throw new Error("Form submission failed.");
            }


            // Reset form after successful submission

            form.reset();


            // Display success message

            statusMessage.textContent =
                "Thanks for reaching out. Your message has been sent successfully.";

            statusMessage.classList.add(
                "contact__form-status--success",
            );

            submitText.textContent = "Message Sent";


        } catch (error) {

            // Display error message

            statusMessage.textContent =
                "Something went wrong. Please try again or contact me directly by email.";

            statusMessage.classList.add(
                "contact__form-status--error",
            );

            submitText.textContent = "Send Message";

        } finally {

            submitButton.disabled = false;

            // Re-render Lucide icons if necessary
            createIcons({ icons });


        }
    });
};


export { renderContact };