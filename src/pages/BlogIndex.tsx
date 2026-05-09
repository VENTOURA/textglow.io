import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export const BlogIndex = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            <Helmet>
                <title>AI Writing Blog — Tips, Guides & AI Strategy | TextGlow</title>
                <meta name="description" content="Master the art of AI-assisted writing. Tips for better emails, LinkedIn growth, and Slack productivity from the TextGlow team." />
                <link rel="canonical" href="https://textglow.io/blog/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/blog/" />
                <meta property="og:title" content="AI Writing Blog — Tips, Guides & AI Strategy | TextGlow" />
                <meta property="og:description" content="Master the art of AI-assisted writing. Tips for better emails, LinkedIn growth, and Slack productivity from the TextGlow team." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI Writing Blog — Tips, Guides & AI Strategy | TextGlow" />
                <meta property="twitter:description" content="Master the art of AI-assisted writing. Tips for better emails, LinkedIn growth, and Slack productivity from the TextGlow team." />
            </Helmet>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        The <span className="text-blue-600">Textglow</span> Blog
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600"
                    >
                        Guides, insights, and strategies to write clearer, smarter, and faster.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                <Link to={`/blog/${post.slug}/`} className="hover:text-blue-600 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                            <div className="flex items-center space-x-3 pt-4 border-t border-slate-50 mt-auto">
                                <img src={post.author.avatarUrl} alt={post.author.name} className="w-8 h-8 rounded-full" />
                                <div className="text-sm">
                                    <p className="font-medium text-slate-900 leading-none">{post.author.name}</p>
                                    <p className="text-slate-500 text-xs mt-1">{post.date} • {post.readTime}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
