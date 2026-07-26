export default Page;

import { usePageContext } from "vike-react/usePageContext";
import { blogPosts } from "@/data/blogPosts";

function Page() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug ?? "";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h1 className="mb-4">Post Not Found</h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            This blog post does not exist.{" "}
            <a href="/blog" style={{ color: "var(--color-accent)" }}>
              Browse all posts →
            </a>
          </p>
        </div>
      </section>
    );
  }

  const PostContent = post.Component;

  return (
    <article className="py-16 md:py-24" lang={post.lang || "en"}>
      <div className="container max-w-3xl">
        <nav
          className="mb-8 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <a href="/blog">Blog</a>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--color-text)" }}>{post.title}</span>
        </nav>

        <header className="mb-10">
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
          <h1 className="mt-3">{post.title}</h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <PostContent />
        </div>
      </div>
    </article>
  );
}
