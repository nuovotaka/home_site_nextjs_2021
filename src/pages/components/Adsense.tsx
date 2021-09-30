import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Adsense = () => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2390425539078205"
        data-ad-slot="8880813090"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default Adsense;
