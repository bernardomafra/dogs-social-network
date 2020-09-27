import React from 'react';

const validationTypes = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  message: 'Preeencha um email válido',
}

const useForm = (validationType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    console.log(`entrei [${value}]`)
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