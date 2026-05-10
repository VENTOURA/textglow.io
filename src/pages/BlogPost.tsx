import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Button } from '../components/ui/Button';

export const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog/" replace />;
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-32">
            <Helmet>
                <title>{post.title} | TextGlow Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://textglow.io/blog/${post.slug}/`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://textglow.io/blog/${post.slug}/`} />
                <meta property="og:title" content={`${post.title} | TextGlow Blog`} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`${post.title} | TextGlow Blog`} />
                <meta property="twitter:description" content={post.excerpt} />
            </Helmet>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to all posts
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                        <span className="font-medium text-blue-600 px-3 py-1 bg-blue-50 rounded-full">{post.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-4 mb-10 pb-8 border-b border-slate-100">
                        <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="font-bold text-slate-900">{post.author.name}</p>
                            <p className="text-sm text-slate-500">{post.author.role} • {post.date} • {post.readTime}</p>
                        </div>
                    </div>

                    <div 
                        className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 mb-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <img src={post.author.avatarUrl} alt={post.author.name} className="w-20 h-20 rounded-full shadow-md border-4 border-white" />
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Written by {post.author.name}</h3>
                                <p className="text-sm text-blue-600 font-medium mb-3">{post.author.role}</p>
                                <p className="text-slate-600 mb-0">{post.author.name} writes extensively about communication psychology, SEO, and how AI is changing the way we work. Connect on LinkedIn for more insights.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Stop reading. Start writing.</h3>
                        <p className="text-slate-600 mb-6">Join thousands of professionals who write 10x faster with TextGlow.</p>
                        <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf">
                            Install TextGlow Free
                        </Button>
                    </div>
                </motion.div>
            </article>
        </div>
    );
};
