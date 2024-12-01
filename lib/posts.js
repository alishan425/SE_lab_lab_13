import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData() {
  // Get the file path for the Markdown file
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  
  // Read the content of the Markdown file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use gray-matter to parse the front matter and content
  const { data, content } = matter(fileContents);

  return { data, content };
}
