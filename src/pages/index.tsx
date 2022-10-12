import type { GetStaticProps, NextPage } from "next";
import { Header } from "../components/header";
import { PostsContainer } from "../components/postsContainer";
import { Presentation } from "../components/presentation";
import { Tab } from "../components/tab";
import { MyUseContext } from "../hooks/myUseContext";
import { getPrismicClient } from "../services/prismic";

interface PostsProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

interface HomeDataProps {
  post: PostsProps[];
}

export default function Home({ post }: HomeDataProps) {
  const {} = MyUseContext();

  return (
    <>
      <Header />
      <Presentation />
      <Tab post={post} />
      <PostsContainer data={post} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get();

  const post = response.results.map((r) => {
    return {
      id: r.uid,
      description: r.data.description,
      tag: r.data.tag,
      title: r.data.title,
    };
  });

  return {
    props: {
      post,
    },
  };
};
