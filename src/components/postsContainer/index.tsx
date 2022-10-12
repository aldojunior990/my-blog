import Link from "next/link";
import { useEffect, useState } from "react";
import { MyUseContext } from "../../hooks/myUseContext";
import { Container, PostWrapper } from "./styles";

interface PostsProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

interface PostsDataProps {
  data: PostsProps[];
}

export function PostsContainer({ data }: PostsDataProps) {
  const { stateView } = MyUseContext();

  const [dataPosts, setDataPosts] = useState<PostsProps[]>(data);

  useEffect(() => {
    if (stateView === "RECENTES") {
      setDataPosts(data);
    } else {
      const temp = data.filter((d) => d.tag === stateView);
      setDataPosts(temp);
    }
  }, [stateView]);

  return (
    <Container>
      {dataPosts.map((p) => {
        return (
          <Link key={p.id} href={`/posts/${p.id}`}>
            <a>
              <PostWrapper key={p.id}>
                <p>{p.tag}</p>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
              </PostWrapper>
            </a>
          </Link>
        );
      })}
    </Container>
  );
}
