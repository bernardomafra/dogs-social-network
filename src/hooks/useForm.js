import React from "react";

const validationTypes = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preeencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maiúsculo, 1 minúscilo e 1 dígito. Com no mínimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas",
  },
};

const useForm = (validationType) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (typeof validationType === undefined) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    }
    if (
      validationTypes[validationType] &&
      !validationTypes[validationType].regex.test(value)
    ) {
      setError(validationTypes[validationType].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
