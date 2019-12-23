export function onChange(event) {
  const target = event.target;
  // const value = target.type === "checkbox" ? target.checked : target.value;
  const value = target.value;
  const name = target.name;
  this.setState(prevState => {
    const field = { ...prevState.formData[name] };
    field.value = value;
    // field.touched = true;
    // field.valid = validate(field.value, field.validation);
    const formData = { ...prevState.formData, [name]: field };
    // let formValid = true;
    // for (let inputIdentifier in formData) {
    //   formValid = formValid && formData[inputIdentifier.valid];
    // }
    return { formData: formData };
  });
}