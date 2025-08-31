import Link from "next/link";
import { getAllPosts } from "@/lib/blogs";

export default function BlogsPage() {
  const posts = getAllPosts();

  // sort newest → oldest
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-2xl p-6 md:p-8">
        <header className="mb-8">
          <h1 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">
            Blogs
          </h1>
        </header>

        {sortedPosts.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border bg-card p-6 text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        ) : (
          <ul className="grid gap-4">
            {sortedPosts.map((post) => (
              <li key={post.slug} className="list-none">
                <Link
                  href={`/blogs/${post.slug}`}
                  aria-label={`Read post: ${post.title}`}
                  className="group block rounded-xl border border-border bg-card shadow-sm ring-1 ring-transparent transition-all hover:shadow-md hover:ring-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-start justify-between gap-3 p-4 md:p-5">
                    <div className="min-w-0">
                      <h2 className="truncate text-pretty text-lg font-semibold leading-6 md:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-md border border-border bg-muted text-foreground/70 transition-transform group-hover:translate-x-0.5"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <div className="h-px w-full bg-border/60" />

                  <div className="flex items-center justify-between p-3 px-4 text-xs md:px-5">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-accent px-2.5 py-1 font-medium text-secondary-foreground">
                      Latest
                    </span>
                    <span className="text-muted-foreground">
                      Continue reading
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
