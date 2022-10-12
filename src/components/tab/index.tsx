import { useEffect, useState } from "react";
import { MyUseContext } from "../../hooks/myUseContext";
import { Button, Container } from "./styles";

interface PostsProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}
interface TabProps {
  post: PostsProps[];
}

interface IndexProps {
  id: number;
  title: string;
}

interface ActiveState {
  id: number;
  isActive: boolean;
}

export function Tab({ post }: TabProps) {
  const { setStateView } = MyUseContext();

  const indexs: IndexProps[] = [
    { id: 0, title: "Recentes" },
    { id: 1, title: "Web" },
    { id: 2, title: "Mobile" },
    { id: 3, title: "Faculdade" },
  ];

  const [active, setActive] = useState<ActiveState[]>([
    { id: 0, isActive: true },
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ]);

  function handleOnClick(id: number, tag: string) {
    var temp: ActiveState[] = [
      { id: 0, isActive: false },
      { id: 1, isActive: false },
      { id: 2, isActive: false },
      { id: 3, isActive: false },
    ];
    temp[id] = { id: id, isActive: true };
    setActive(temp);
    setStateView(tag.toUpperCase());
  }

  return (
    <Container>
      <ul>
        {indexs.map((i) => {
          return (
            <li key={i.id}>
              {" "}
              <Button
                isActive={active[i.id].isActive}
                onClick={() => handleOnClick(i.id, i.title)}
              >
                {i.title}
              </Button>{" "}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
