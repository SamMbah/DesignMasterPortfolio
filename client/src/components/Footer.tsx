const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Alex Morgan. All rights reserved.</p>
        <p className="text-sm text-gray-medium mt-2">UX Designer Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
