import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({searchParams}) {
  console.log(searchParams)
  if(searchParams.error === "true") {
    throw new Error("This is an error!")
  }

  return (
    <nav>
      <Link href={"/about-us"}> About us </Link> <br />
      <Link
        href={{
          pathname: "/about-us",
          query: {
            name: "Cihan",
            surname: "Koc",
            age: "30"
          },

        }}> 
        About us with query params
      </Link> 
      <br />
      <Link href={"/login"}> Admin login page </Link> <br />
      <Link href={"/blog"}>blog page </Link> <br />
      <Link href={"/docs/post-1"}> docs - post-1 </Link> <br />
      <Link href={"/docs/post-1/post-2"}> docs - post1 - post-2 </Link> <br />
      <Link href={"/docs2/post-1/post-2"}> docs2 - post1 - post-2 </Link> <br />
    </nav>
  );
}
