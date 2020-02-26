import { useState, useCallback, useEffect } from 'react';
import isFunction from 'lodash/isFunction';

const getElementsByKey = refMap => key => refMap.get(key);
const getTopElement = (highest, current) => {
  if (!highest) return current;
  const currentTopOffset = current.getBoundingClientRect().top;
  const prevTopOffset = highest.getBoundingClientRect().top;
  return currentTopOffset < prevTopOffset ? current : highest;
};

const useForm = (submit, options = {}) => {
  const {
    onError,
    validate,
    onSubmitResolved,
    onSubmitRejected,
  } = options;
  const [values, setValues] = useState({});
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refMap] = useState(() => new Map());

  const onChange = useCallback((newState) => {
    if (isFunction(newState)) {
      setValues(newState);
      return;
    }
    setValues(state => ({ ...state, ...newState }));
  }, []);

  const getFormErrors = useCallback(() => {
    if (!validate) return undefined;
    return validate(values);
  }, [validate, values]);

  const handleSuccess = (res) => {
    setPending(false);
    if (onSubmitResolved) onSubmitResolved(res);
  };

  const setRef = name => ref => ref && refMap.set(name, ref);

  const handleError = (err) => {
    if (onError) setErrors(onError(err));
    setPending(false);
    if (onSubmitRejected) onSubmitRejected(err);
  };

  const onSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitted(true);
    const formErrors = getFormErrors();
    if (formErrors) {
      setErrors(formErrors);
      // scroll to error field if form is submitted
      const errorElements = Object
        .keys(formErrors)
        .map(getElementsByKey(refMap))
        .filter(item => item !== undefined);
      const topElement = errorElements.reduce(getTopElement, null);
      if (topElement) {
        topElement.scrollIntoView();
      }
      return;
    }
    setPending(true);
    setErrors({});

    await submit(values).then(handleSuccess, handleError);
  };

  // Validate on change values ( after submitting form )
  useEffect(() => {
    if (isSubmitted) {
      const formErrors = getFormErrors();
      if (formErrors) {
        setErrors(formErrors);
        return;
      }
      setErrors({});
    }
  }, [isSubmitted, getFormErrors]);

  return [
    {
      values,
      pending,
      errors,
      refs: refMap,
    },
    onChange,
    onSubmit,
    setRef,
  ];
};

export default useForm;
