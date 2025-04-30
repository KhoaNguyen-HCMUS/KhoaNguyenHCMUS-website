import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../../context/themeContext';
import { COLORS } from '../../styles/colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

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
    <footer style={{ backgroundColor: theme.primary }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
          <div className='text-sm' style={{ color: theme.text.secondary }}>
            © {currentYear} Khoa Nguyen. All rights reserved.
          </div>

          <div className='flex space-x-6'>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-300'
                style={{
                  color: theme.text.secondary,
                  ':hover': { color: theme.text.primary },
                }}
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
