import { Suspense } from 'react'
import './App.css'
import React from 'react';

function App() {

  const RemoteProfile = React.lazy(async () => {
    const module = await import("profile/Profile");
    return { default: module.default };
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Dashboard Host</h1>

      <Suspense fallback={<p>Loading Profile...</p>}>
        <RemoteProfile />
      </Suspense>
    </div>
  )
}

export default App
