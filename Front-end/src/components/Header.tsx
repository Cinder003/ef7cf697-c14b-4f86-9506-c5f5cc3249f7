import { FiTarget } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-4 shadow-lg shadow-purple-300/50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FiTarget className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Prospect Manager
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;