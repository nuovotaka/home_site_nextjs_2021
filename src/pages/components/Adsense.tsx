import React, { useEffect } from 'react';

const Adsense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
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
