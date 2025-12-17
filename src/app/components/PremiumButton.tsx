import { ReactNode } from 'react';
import { Link } from 'react-router';

interface PremiumButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export function PremiumButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button'
}: PremiumButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-3 
    font-medium tracking-wide overflow-hidden
    transition-all duration-500 ease-out
    group cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const variantStyles = {
    primary: `
      bg-[#E65538] text-white border-2 border-[#1E2916]
      hover:bg-[#1E2916] hover:text-white
      active:scale-[0.98]
    `,
    secondary: `
      bg-[#8FA893] text-white border-2 border-[#1E2916]
      hover:bg-[#1E2916] hover:text-white
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-[#1E2916] border-2 border-[#1E2916]
      hover:bg-[#1E2916] hover:text-white
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-[#1E2916] border-2 border-transparent
      hover:border-[#1E2916] hover:bg-white
      active:scale-[0.98]
    `,
    glow: `
      bg-[#E65538] text-white border-2 border-[#E65538]
      hover:shadow-[0_0_30px_rgba(230,85,56,0.5)]
      hover:border-white
      active:scale-[0.98]
    `
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {/* Shine effect overlay */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
      
      {/* Content */}
      <span className="relative flex items-center gap-3">
        {icon && iconPosition === 'left' && (
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  to?: string;
}

export function MagneticButton({ children, className = '', to }: MagneticButtonProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  const content = (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}
