import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blogs";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  const processed = await remark().use(html).use(remarkGfm).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto w-full max-w-2xl p-6 md:p-8">
        <header className="mb-6">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-pretty text-2xl font-bold tracking-tight md:text-3xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="shrink-0 rounded-full border border-border bg-accent px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="mt-4 h-px w-full bg-border/60" />
        </header>

        <div className="prose prose-lg dark:prose-invert text-pretty">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <footer className="mt-8 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </footer>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}
