"use client";
import React, { useState } from "react";

import PublicHome from "./PublicHome";
import Login from "./Login";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section>
      {isLoggedIn ? <Login> </Login> : <PublicHome></PublicHome>}
    </section>
  );
};

export default Homepage;
