import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      <Head>
        <title>Redirecting...</title>
      </Head>
      <div className="not-found">
        <h1>Oooops....</h1>
        <h2>That page cannot be found!</h2>
        <p>
          Go back to the{" "}
          <Link legacyBehavior href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
