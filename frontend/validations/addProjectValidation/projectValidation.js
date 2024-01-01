export const projectValidation = (values) => {
  let valError = {};
  console.log("values", values);
  if (!values.title) {
    valError.title = "Title is required";
    console.log("valError", valError);
    return valError;
  }
  if (!values.description) {
    valError.description = "Description is required";
    return valError;
  }
  if (!values.image) {
    valError.image = "Image is required";
    return valError;
  }
  if (!values.category) {
    valError.category = "Category is required";
    return valError;
  }

  console.log("valError", valError);
};
