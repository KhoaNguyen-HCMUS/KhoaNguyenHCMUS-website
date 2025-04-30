import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTheme } from '../../context/themeContext';
import { COLORS } from '../../styles/colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

  const contactInfo = [
    {
      id: 'phone',
      icon: <FaPhone className='w-5 h-5' />,
      label: 'Phone',
      value: '+84 946 557 515',
      href: 'tel:+84946557515',
    },
    {
      id: 'email',
      icon: <FaEnvelope className='w-5 h-5' />,
      label: 'Email',
      value: 'anhkhoa515.dev@gmail.com',
      href: 'mailto:anhkhoa515.dev@gmail.com',
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin className='w-5 h-5' />,
      label: 'LinkedIn',
      value: 'khoanguyenhcmus',
      href: 'https://linkedin.com/in/khoanguyenhcmus',
    },
    {
      id: 'github',
      icon: <FaGithub className='w-5 h-5' />,
      label: 'GitHub',
      value: 'KhoaNguyen-HCMUS',
      href: 'https://github.com/KhoaNguyen-HCMUS',
    },
  ];

  return (
    <footer style={{ backgroundColor: theme.primary }} className='pt-12 pb-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          {/* Contact Information */}
          <div>
            <h3 className='text-lg font-semibold mb-4' style={{ color: theme.text.primary }}>
              Contact Information
            </h3>
            <div className='space-y-3'>
              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-3 group'
                >
                  <span className='transition-colors duration-300' style={{ color: theme.text.accent }}>
                    {info.icon}
                  </span>
                  <span className='transition-colors duration-300' style={{ color: theme.text.secondary }}>
                    {info.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className='flex flex-col items-center md:items-end'>
            <img src='/logo.svg' alt='Logo' className='h-12 w-auto mb-4' />
            <div className='text-sm' style={{ color: theme.text.secondary }}>
              © {currentYear} Khoa Nguyen. All rights reserved.
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='pt-8 mt-8 border-t flex justify-center space-x-6' style={{ borderColor: theme.text.secondary }}>
          {contactInfo.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors duration-300 hover:opacity-80'
              style={{ color: theme.text.accent }}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
