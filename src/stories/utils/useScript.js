import { useEffect, useState } from 'react';

// use a script
const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

// load an external script i.e.
// const { Stripe } = useLoadScript('https://js.stripe.com/v2/', 'Stripe')
const useLoadScript = (url, name) => {

  const [lib, setLib] = useState({})

  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true
    script.onload = () => setLib({ [name]: window[name] })

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return lib

}

export { useScript, useLoadScript};