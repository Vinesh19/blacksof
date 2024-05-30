import { useState } from "react";

export const useInput = (
  defaultValue: string,
  validationFn: (value: string) => boolean,
  customErrorMessage?: string
) => {
  const [enteredValue, setEnteredValue] = useState<string>(defaultValue);
  const [didEdit, setDidEdit] = useState<boolean>(false);

  const valueIsValid = validationFn(enteredValue);
  const errorMessage = didEdit && !valueIsValid ? customErrorMessage || "" : "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
    setDidEdit,
    errorMessage,
  };
};
