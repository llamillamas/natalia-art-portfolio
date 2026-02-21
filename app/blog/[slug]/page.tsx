import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import posts from '@/lib/posts.json';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} - Natalia B. Llamas`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Convert content paragraphs
  const contentParagraphs = post.content.split('\n\n');

  return (
    <article className="container mx-auto px-4 py-12 md:py-16">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-accent hover:underline mb-8 group"
      >
        <svg
          className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="max-w-3xl mx-auto mb-12">
        <time className="text-accent font-medium">{formatDate(post.date)}</time>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">{post.title}</h1>
        <p className="text-xl text-gray-400 leading-relaxed">{post.excerpt}</p>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
        {contentParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-300 leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Author Section */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <Image
            src="/natalia-art-portfolio/images/logo.png"
            alt="Natalia B. Llamas"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Natalia B. Llamas</h3>
            <p className="text-gray-400">Graphic Designer & Digital Illustrator</p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">More Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts
            .filter((p) => p.slug !== params.slug)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-accent transition-colors"
              >
                <time className="text-sm text-accent">{formatDate(relatedPost.date)}</time>
                <h3 className="font-semibold mt-1 group-hover:text-accent transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </article>
  );
}
