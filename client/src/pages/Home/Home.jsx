import React from "react";
import { Helmet } from "react-helmet-async";

export const Home = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home Page"
        />
      </Helmet>
      Home
    </div>
  );
});
