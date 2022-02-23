import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import useHttp from "utils/hooks/use-http";

const Home: NextPage = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const handleFetchData = (fetchedData) => {
    console.log(fetchedData);
  };

  React.useEffect(() => {
    sendRequest(
      {
        url: "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",
      },
      handleFetchData
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Next TS Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
