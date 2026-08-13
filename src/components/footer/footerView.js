const renderFooter = () => {
    const footer = document.querySelector("#footer");

    if (!footer) {
        throw new Error("Footer mount point #footer was not found.");
    }

    footer.innerHTML = `
    <p>© Godfrey Emmanuel</p>
  `;
};

export { renderFooter };