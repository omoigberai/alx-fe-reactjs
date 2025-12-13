import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">React Query Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
