import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'pro';
    size?: 'sm' | 'md' | 'lg';
    to?: string;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    type = 'button',
    className = '',
    onClick
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-md",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200",
        ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
        pro: "bg-gradient-to-r from-brand-600 to-brand-400 text-white hover:from-brand-700 hover:to-brand-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.45)] border-none transition-all duration-300"
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            className={combinedClassName}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
};
