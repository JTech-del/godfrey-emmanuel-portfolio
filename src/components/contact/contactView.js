const renderContact = () => {
    const contact = document.querySelector("#contact");

    if (!contact) {
        throw new Error("Contact mount point #contact was not found.");
    }

    contact.innerHTML = `
    <div>
      <p>Contact section</p>
    </div>
  `;
};

export { renderContact };