import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import * as prismicH from "@prismicio/helpers";
import { Header } from "../../components/header";
import { Banner, Container } from "../../styles/posts";
import Head from "next/head";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

import { MdWeb } from "react-icons/md";
import { AiOutlineMobile, AiOutlineArrowUp } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { MyUseContext } from "../../hooks/myUseContext";

interface Post {
  id: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  content: [];
}

interface PostProps {
  post: Post;
}

export default function Posts({ post }: PostProps) {
  const { setStateView } = MyUseContext();

  setStateView("RECENTES");

  function handleToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <title>{`${post.title} `}</title>

      <Header />

      {post.tag === "WEB" && (
        <Banner>
          <MdWeb size="10rem" />
        </Banner>
      )}

      {post.tag === "MOBILE" && (
        <Banner>
          <AiOutlineMobile size="10rem" />
        </Banner>
      )}

      {post.tag === "FACULDADE" && (
        <Banner>
          <FiBookOpen size="10rem" />
        </Banner>
      )}

      <Container>
        <nav className="title">
          <h1>{post.title}</h1>
          <p>
            {post.tag} - {post.date}
          </p>
        </nav>

        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: prismicH.asHTML(post.content),
          }}
        ></div>

        <nav className="footer">
          <button onClick={() => handleToTop()}>
            <AiOutlineArrowUp />
          </button>
        </nav>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get();

  const paths = response.results.map((r) => {
    return {
      params: {
        slug: r.uid,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>("post", String(slug), {});

  const post = {
    id: response.uid,
    description: response.data.description,
    tag: response.data.tag,
    title: response.data.title,
    content: response.data.content,
    date: format(new Date(response.first_publication_date), "dd MMM yyyy", {
      locale: ptBR,
    }),
  };

  return {
    props: {
      post,
    },
  };
};
