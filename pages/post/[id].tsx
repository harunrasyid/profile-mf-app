import { NextPageContext } from "next";

// Define the type for the props
interface IPostPageProps {
  id: string | undefined; // Allow id to be undefined if it's not provided
}

const PostPage = ({ id }: IPostPageProps) => {
  return (
    <main className="flex flex-col bg-white">
      <div className="h-[100vh] p-4">
        <div className="text-black">Post Screen with {id}</div>
      </div>
    </main>
  );
};

PostPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

export default PostPage;
