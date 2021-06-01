import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import MainContent from '../../components/MainContent';
import axios from 'axios';

export default function Home({ data, fbUrl }) {
  console.log('fbUrl', fbUrl);
  return (
    <div className="wrap">
      <Head>
        <title>WRITING | YUI CHENG</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <meta property="og:image" content={fbUrl}></meta>
      </Head>
      <Layout />
      <MainContent category={'writings'} />
      <a
        href="http://www.facebook.com/share.php?u=https://test-setupssr.herokuapp.com/writings"
        target="_blank"
      >
        123
      </a>
      {/* {data &&
        data.results.books.map((book, index) => (
          <p key={index}>{book.book_uri}</p>
        ))} */}
    </div>
  );
}

export async function getServerSideProps() {
  // const res = await axios.get(
  //   'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PtS4BnKhZx8LO0cbkFATrFpjgwwhSS3I',
  // );
  // const fbUrl = await axios.get(
  //   `https://test-event.ttshow.tw/peoplenotfound/api/image/DWCG27SvItVaiazu?meta=1`,
  // );
  // console.log('data234', fbUrl);
  return {
    props: {
      // data: res.data,
      fbUrl:
        'https://test-event.ttshow.tw/peoplenotfound/api/image/DWCG27SvItVaiazu?meta=1',
    },
  };
}
// export default Page;
