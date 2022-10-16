import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMediaQuery } from "hooks/useMediaQuery";

import AutoComplete from "components/autoComplete/AutoComplete";
import { Container } from "components/layout/Container";
import SearchInput from "components/autoComplete/utils/searchInput/SearchInput";

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const isMobile = useMediaQuery(768);

  return (
    <>
      <Head>
        <title>Schiphol - Search and find</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="flex flex-row">
            <div className="mt-20">
              {["Find an", "arriving flight"].map((text, index) => (
                <h1
                  key={index}
                  className={`flex ${
                    index === 0 && "-mb-6"
                  } flex-col bg-gradient-to-r from-gradientPurple to-gradientBlue bg-clip-text text-6xl font-bold leading-normal text-transparent selection:bg-gradientBlue/40 selection:text-gradientPurple`}
                >
                  {text}
                </h1>
              ))}
              <div className="mt-10 mb-14 w-96">
                <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
              </div>
            </div>
            {!isMobile && (
              <div className="mt-[60px] -mr-[140px]">
                <Image
                  src="/images/planeman.png"
                  alt="Picture"
                  width="900"
                  height="500"
                />
              </div>
            )}
          </div>
        </Container>
        <div className="mt-5 bg-backgroundBlue pb-52">
          <Container>
            <AutoComplete query={query} />
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;