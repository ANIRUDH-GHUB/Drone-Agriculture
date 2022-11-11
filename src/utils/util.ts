export const alertMessage = (message: string, severity: string = "success") => {
  window.dispatchEvent(
    new CustomEvent("alert", {
      detail: { message: message, severity: severity },
    })
  );
};
