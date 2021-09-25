import React from 'react';

export default function Custom500() {
  return (
    <>
      <h1 className="font-bold">500 - Server-side error occurred</h1>
      <div>
        <img src="/assets/images/posts/error.png" alt="server_error" />
      </div>
    </>
  );
}
