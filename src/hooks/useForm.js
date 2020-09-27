import React from 'react';

const validationTypes = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preeencha um email válido',
  },
}

const useForm = (validationType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (typeof validationType === undefined) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    }
    else if (validationTypes[validationType] &&
      !validationTypes[validationType].regex.test(value)) {
      setError(validationTypes[validationType].message);
      return false;
    }
    else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value);
  }

  return (
    {
      value,
      setValue,
      onChange,
      error,
      validate: () => validate(value),
      onBlur: () => validate(value),
    }
  )
}

export default useForm;