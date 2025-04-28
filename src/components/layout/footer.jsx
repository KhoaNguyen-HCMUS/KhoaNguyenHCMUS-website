import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 'github',
      icon: <FaGithub className='w-6 h-6' />,
      href: 'https://github.com/KhoaNguyen-HCMUS',
      label: 'GitHub',
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin className='w-6 h-6' />,
      href: 'https://linkedin.com/in/khoanguyenhcmus',
      label: 'LinkedIn',
    },
    {
      id: 'email',
      icon: <FaEnvelope className='w-6 h-6' />,
      href: 'mailto:anhkhoa515.dev@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className='bg-gray-900 text-gray-400'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
          {/* Copyright */}
          <div className='text-sm'>© {currentYear} Khoa Nguyen. All rights reserved.</div>

          {/* Social Links */}
          <div className='flex space-x-6'>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors duration-300'
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
