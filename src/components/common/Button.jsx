import React from 'react'; // Add this line
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  to, 
  href, 
  ...props 
}) => {
  const baseClasses = `btn btn-${variant} ${className}`
  
  // If "to" prop is provided, render as a Link
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    )
  }
  
  // If "href" prop is provided, render as an anchor
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    )
  }
  
  // Default: render as a button
  return (
    <button type={type} className={baseClasses} {...props}>
      {children}
    </button>
  )
}

export default Button