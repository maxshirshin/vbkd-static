export default Page;

import { blogPosts } from "@/data/blogPosts";

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-center mb-4">Blog</h1>
        <p
          className="text-center mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Thoughts on botanical art, technique, and the creative process.
        </p>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b pb-8"
              style={{ borderColor: "var(--color-border-light)" }}
            >
              <a href={`/blog/${post.slug}`} className="group">
                <time
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {post.date}
                </time>
                {post.lang && post.lang !== "en" && (
                  <span
                    className="ml-2 text-xs uppercase px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "var(--color-surface-muted)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {post.lang === "ru" ? "Русский" : post.lang}
                  </span>
                )}
                <h2
                  className="text-xl mt-2 mb-2 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {post.excerpt}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
