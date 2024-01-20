import { useState, useCallback } from "react";

// hook for Form control
export function useForm(inputs) {
  const [values, setValues] = useState(inputs);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleChange };
}

// hook for form control and form validation
export function useFormWithValidation(defaults) {
  const [values, setValues] = useState(defaults);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = defaults, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, defaults]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
