import "./contact.css";

const renderContact = () => {
    const contactSection = document.querySelector("#contact");

    if (!contactSection) {
        throw new Error("Contact mount point #contact was not found.");
    }

    contactSection.innerHTML = `
        <section
            class="contact section"
            aria-labelledby="contact-title"
        >
            <div class="container">

                <div class="contact__layout">

                    <!-- Contact Introduction -->

                    <div
                        class="contact__intro"
                        data-motion="fade-right"
                    >

                        <p class="contact__eyebrow">
                            <i
                                data-lucide="send"
                                aria-hidden="true"
                            ></i>

                            <span>Contact</span>
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
                            like to discuss? Tell me what you're working
                            on and I'll get back to you.
                        </p>


                        <!-- Contact Methods -->

                        <div class="contact__methods">

                            <!-- Email -->

                            <a
                                href="mailto:emmanuelgodfrey073@gmail.com"
                                class="contact__method"
                            >
                                <span
                                    class="contact__method-icon"
                                    aria-hidden="true"
                                >
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
                                href="tel:+2348060969645"
                                class="contact__method"
                            >
                                <span
                                    class="contact__method-icon"
                                    aria-hidden="true"
                                >
                                    <i data-lucide="phone"></i>
                                </span>

                                <span class="contact__method-content">
                                    <span class="contact__method-label">
                                        Phone
                                    </span>

                                    <span class="contact__method-value">
                                        +234 806 096 9645
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
                                <span
                                    class="contact__method-icon contact__method-icon--whatsapp"
                                    aria-hidden="true"
                                >
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

                        <div
                            class="contact__social"
                            data-motion="fade-up"
                            data-motion-delay="1"
                        >

                            <p class="contact__social-label">
                                Connect with me
                            </p>

                            <div class="contact__social-links">

<a
    href="https://github.com/JTech-del"
    class="contact__social-link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
>
    <svg
        class="contact__github-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
    >
        <path
            fill="currentColor"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482
            0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466
            -.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088
            2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943
            0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647
            0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844
            a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025
            .546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683
            0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
            0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48
            A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
        />
    </svg>
</a>    

                            </div>

                        </div>

                    </div>


                    <!-- Contact Form -->

                    <div
                        class="contact__form-wrapper"
                        data-motion="fade-left"
                        data-motion-delay="1"
                    >

                        <div class="contact__form-header">

                            <p class="contact__form-eyebrow">
                                Send a message
                            </p>

                            <h3 class="contact__form-title">
                                Tell me about your project.
                            </h3>

                            <p class="contact__form-description">
                                Share a few details about what you're
                                building, what you need, or what you'd
                                like to discuss.
                            </p>

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

                                <i
                                    data-lucide="arrow-up-right"
                                    aria-hidden="true"
                                ></i>
                            </button>


                            <!-- Form Status -->

                          <div
    class="contact__form-status"
    role="status"
    aria-live="polite"
    aria-atomic="true"
></div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();

    const form = contactSection.querySelector(
        ".contact__form",
    );

    const submitButton = contactSection.querySelector(
        ".contact__submit",
    );

    const submitText = contactSection.querySelector(
        ".contact__submit-text",
    );

    const statusMessage = contactSection.querySelector(
        ".contact__form-status",
    );

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitText.textContent = "Sending...";

    statusMessage.innerHTML = "";
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

        form.reset();

        statusMessage.innerHTML = `
            <div class="contact__form-status-content">
                <span
                    class="contact__form-status-icon"
                    aria-hidden="true"
                >
                    <i data-lucide="check"></i>
                </span>

                <span class="contact__form-status-text">
                    Thanks for reaching out. Your message has been sent successfully.
                </span>
            </div>
        `;

        statusMessage.classList.add(
            "contact__form-status--success",
        );

        submitText.textContent = "Message Sent";

        window.lucide?.createIcons();

        setTimeout(() => {
            statusMessage.classList.add(
                "contact__form-status--hidden",
            );

            setTimeout(() => {
                statusMessage.innerHTML = "";
                statusMessage.className =
                    "contact__form-status";

                submitText.textContent = "Send Message";
            }, 250);
        }, 5000);
    } catch (error) {
        console.error(
            "Contact form submission failed:",
            error,
        );

        statusMessage.innerHTML = `
            <div class="contact__form-status-content">
                <span
                    class="contact__form-status-icon"
                    aria-hidden="true"
                >
                    <i data-lucide="alert-circle"></i>
                </span>

                <span class="contact__form-status-text">
                    Something went wrong. Please try again or contact me directly by email.
                </span>
            </div>
        `;

        statusMessage.classList.add(
            "contact__form-status--error",
        );

        submitText.textContent = "Send Message";

        window.lucide?.createIcons();

        setTimeout(() => {
            statusMessage.classList.add(
                "contact__form-status--hidden",
            );

            setTimeout(() => {
                statusMessage.innerHTML = "";
                statusMessage.className =
                    "contact__form-status";
            }, 250);
        }, 5000);
    } finally {
        submitButton.disabled = false;
    }
});

    return contactSection;
};

export { renderContact };