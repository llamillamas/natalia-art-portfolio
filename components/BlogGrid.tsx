import Link from 'next/link';
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

interface BlogGridProps {
  posts: Post[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-all duration-300 hover:-translate-y-1"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <time className="text-sm text-accent font-medium">
                {formatDate(post.date)}
              </time>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-secondary group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center text-accent text-sm font-medium">
                Read More
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
