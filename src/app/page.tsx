import Link from 'next/link';

const posts = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
  { id: '3', title: 'Third Post' },
  { id: '4', title: 'Fourth Post' },
];

const Home = () => {
  return (
    <div className="max-w-auto min-h-screen mx-auto p-8 bg-gradient-to-br from-teal-500 to-coral-500">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
        Welcome to My Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative group bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-semibold text-teal-600 group-hover:text-coral-500 transition-colors duration-200 mb-4">
                {post.title}
              </h2>

              <Link
                href={`/post/${post.id}`}
                className="px-6 py-3 text-white font-semibold bg-teal-600 rounded-lg shadow-md transform transition-all duration-200 hover:bg-coral-600 hover:translate-y-1"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;