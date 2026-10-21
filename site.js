const statusGroups = document.querySelectorAll(".status-group");

statusGroups.forEach((group) => {
  const buttons = [...group.querySelectorAll("button[data-status]")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
    });
  });
});

const passwordForm = document.querySelector("#novelle-password-form");

if (passwordForm) {
  const passwordInput = document.querySelector("#novelle-password");
  const errorMessage = document.querySelector("#novelle-password-error");
  const stories = document.querySelector("#novelle-content");

  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value !== "LosHombres") {
      errorMessage.textContent = "Password non corretta. Riprova.";
      passwordInput.setAttribute("aria-invalid", "true");
      passwordInput.focus();
      return;
    }

    errorMessage.textContent = "";
    passwordInput.removeAttribute("aria-invalid");
    stories.hidden = false;
    passwordForm.hidden = true;
    stories.querySelector("h2").focus();
  });
}
