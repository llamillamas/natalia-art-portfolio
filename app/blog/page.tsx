import BlogGrid from '@/components/BlogGrid';
import posts from '@/lib/posts.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Natalia B. Llamas',
  description: 'Articles and insights about digital illustration, graphic design, and the creative process.',
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Thoughts on design, illustration, and the creative journey. 
          Tips, techniques, and behind-the-scenes insights.
        </p>
      </div>
      
      <BlogGrid posts={sortedPosts} />
    </div>
  );
}
