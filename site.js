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

const passwordForm = document.querySelector("[data-password-gate]");

if (passwordForm) {
  const passwordInput = passwordForm.querySelector('input[type="password"]');
  const errorMessage = passwordForm.querySelector(".password-error");
  const protectedContent = document.querySelector(
    "#novelle-content, #hotpics-content",
  );

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
    protectedContent.hidden = false;
    passwordForm.hidden = true;
    protectedContent.querySelector("h2").focus();
  });
}
