function clearFormsFields(form) {
  form.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}
export default clearFormsFields;
