import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "Blogs");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const filePath = path.join(postsDir, file);
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    return {
      slug,
      title: data.title || slug,
      date: data.date || null,
    };
  });
}

export function getPost(slug: string) {
  const filePath = path.join(postsDir, slug + ".md");
  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: body } = matter(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    content: body,
  };
}
