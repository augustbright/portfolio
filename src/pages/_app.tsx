import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/main.scss";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156999593-1"></script>
          <script dangerouslySetInnerHTML={{__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-156999593-1');
          `}}/>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="A React.js developer"
          />
          <meta name="keywords" content="React.js,Website,Freelance"/>
          <meta name="author" content="vtumanov782@gmail.com" />

          <title>
            August Bright - A React Developer
          </title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
