import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    progress: undefined,
  });
};
