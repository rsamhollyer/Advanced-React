import { useState } from 'react';

export default function useForm(initialState = {}) {
  // Create state object for our inputs

  const [inputs, setInputs] = useState(initialState);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surgace from this custom hook
  return { inputs, handleChange, resetForm, clearForm };
}
