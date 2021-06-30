import { useState, useEffect } from 'react';

/* custom hook for API calls  */
export const useHttp = (isSending, checked) => {
  const [token, setToken] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchData = async (checked) => {
    const username = checked
      ? process.env.REACT_APP_ADMIN
      : process.env.REACT_APP_GUEST;
    const password = checked
      ? process.env.REACT_APP_ADMIN_PASSWORD
      : process.env.REACT_APP_GUEST_PASSWORD;

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify({
        operation: 'create_authentication_tokens',
        username,
        password,
      }),
    };
    setLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DB_URL,
        requestOptions
      );
      const responseText = await response.text();
      const parsed = JSON.parse(responseText);
      const appToken = parsed.operation_token;
      setToken(appToken);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (isSending) {
      fetchData(checked);
    }
  }, [isSending, checked]);

  return { token, error, loading };
};
