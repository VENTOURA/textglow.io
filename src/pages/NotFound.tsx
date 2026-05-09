import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
            <Helmet>
                <title>Page Not Found | TextGlow</title>
                <meta name="description" content="The page you're looking for doesn't exist." />
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <span className="text-9xl font-extrabold text-slate-100 block">404</span>
                    <h1 className="text-3xl font-bold text-slate-900 -mt-12">Page Not Found</h1>
                </div>
                <p className="text-slate-600 mb-10 text-lg">
                    We couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
                <Button href="/" size="lg" className="w-full sm:w-auto">
                    <HomeIcon className="w-4 h-4 mr-2" />
                    Back to Homepage
                </Button>
            </div>
        </div>
    );
}
