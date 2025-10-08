// generate-blog-posts.js
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const BLOG_DIR = "./"; // where your blog HTML files live
const IMAGE_DIR = "./images/blog/";
const OUTPUT_FILE = "./blog-posts.js";

const blogFiles = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.startsWith("blog-") && f.endsWith(".html"));

const posts = [];

for (const file of blogFiles) {
  const html = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const titleEl = document.querySelector("h1.blog-title");
  const title = titleEl ? titleEl.textContent.trim() : "Untitled Post";

  const excerptEl = document.querySelector("p");
  const excerpt = excerptEl ? excerptEl.textContent.trim().slice(0, 160) + "..." : "";

  const imgEl = document.querySelector("img.blog-featured-img");
  const image = imgEl ? imgEl.getAttribute("src") : null;

  posts.push({
    title,
    excerpt,
    image: image ? image : IMAGE_DIR + "default.jpg",
    url: file,
    category: "",
  });
}

const jsContent = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
const blogPosts = ${JSON.stringify(posts, null, 2)};
export default blogPosts;
`;

fs.writeFileSync(OUTPUT_FILE, jsContent);
console.log(`✅ blog-posts.js generated with ${posts.length} posts.`);
