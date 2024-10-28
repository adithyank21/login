import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <Container>
      {/* <h1 className="text-center my-4">Authentication System</h1> */}
      {hasAccount ? (
        <Login />
      ) : (
        <Register />
      )}
      <div className="text-center mt-3">
        <Button variant="link" onClick={() => setHasAccount(!hasAccount)}>
          {hasAccount ? "Don't have an account? Register" : "Already have an account? Login"}
        </Button>
      </div>
    </Container>
  );
}

export default App;
