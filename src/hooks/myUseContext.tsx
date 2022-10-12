import { createContext, ReactNode, useContext, useState } from "react";

interface PostsProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

interface ContextData {
  stateView: string;
  setStateView: (state: string) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const [stateView, setStateView] = useState<string>("RECENTES");

  return (
    <Context.Provider value={{ stateView, setStateView }}>
      {children}
    </Context.Provider>
  );
}

export function MyUseContext() {
  const context = useContext(Context);
  return context;
}
