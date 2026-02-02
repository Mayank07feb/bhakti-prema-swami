export default function BlogList({ blogs }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="rounded-xl border p-5 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">
            {blog.title}
          </h2>

          <p className="text-gray-600 mb-3">
            {blog.excerpt}
          </p>

          <div className="text-sm text-gray-500 flex justify-between">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
