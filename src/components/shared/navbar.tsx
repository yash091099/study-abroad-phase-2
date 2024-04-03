import React, { FunctionComponent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExamsDropdownOpen, setIsExamsDropdownOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsExamsDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full bg-snow-100 flex flex-row items-center justify-between py-8 px-4 lg:px-10 xl:px-20 box-border text-left text-2xl lg:text-4xl text-darkslategray-200 font-Gilroy-Bold z-50">
      <img onClick={() => navigate('/')} className="w-32 h-auto cursor-pointer" alt="Home" src="/navbar-logo@2x.png" />
      <div className="flex flex-row items-start justify-start gap-10 mr-10">
        <div className={`rounded-full py-2 px-4 cursor-pointer transition duration-300 ${isActive('/home') ? 'text-white' : ''}`} style={{ backgroundColor: isActive('/home') ? '#FF5573' : 'transparent' }} onClick={() => handleNavigation('/home')}>Home</div>
        <div className={`rounded-full py-2 px-4 cursor-pointer transition duration-300 ${isActive('/courses') ? 'text-white' : ''}`} style={{ backgroundColor: isActive('/courses') ? '#FF5573' : 'transparent' }} onClick={() => handleNavigation('/courses')}>Courses</div>
        <div className={`rounded-full py-2 px-4 cursor-pointer transition duration-300 ${isActive('/institutions') ? 'text-white' : ''}`} style={{ backgroundColor: isActive('/institutions') ? '#FF5573' : 'transparent' }} onClick={() => handleNavigation('/institutions')}>Universities</div>
        <div className={`rounded-full py-2 px-4 cursor-pointer transition duration-300 ${isActive('/scholarship') ? 'text-white' : ''}`} style={{ backgroundColor: isActive('/scholarship') ? '#FF5573' : 'transparent' }} onClick={() => handleNavigation('/scholarship')}>Scolarship</div>
        <div className="relative">
          <div className={`rounded-full py-2 px-4 cursor-pointer  transition duration-300 flex items-center ${isExamsDropdownOpen || isActive('/exam-ielts') || isActive('/ielts-topic') || isActive('/ielts-cue-card') || isActive('/ielts-essay') ? 'text-white' : ''}`} style={{ backgroundColor: isExamsDropdownOpen || isActive('/exam-ielts') || isActive('/ielts-topic') || isActive('/ielts-cue-card') || isActive('/ielts-essay') ? '#FF5573' : 'transparent' }}
               onClick={() => setIsExamsDropdownOpen(!isExamsDropdownOpen)}>
            Exams <img className="w-6 h-6 ml-1" alt="Dropdown" src="/chevrondown.svg" />
          </div>
          {isExamsDropdownOpen && (
            <div className="absolute top-full mt-2 py-2 w-48 bg-white shadow-xl rounded-lg flex flex-col z-50"
                 style={{ backgroundColor: '#fff' }}>
              <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleNavigation('/exam-ielts')}>IELTS Exam</div>
              <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleNavigation('/ielts-topic')}>IELTS Topic</div>
              <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleNavigation('/ielts-cue-card')}>IELTS Cue Card</div>
              <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleNavigation('/ielts-essay')}>IELTS Essay</div>
            </div>
          )}
        </div>
        <div className={`rounded-full py-2 px-4 cursor-pointer transition duration-300 ${isActive('/blog') ? 'text-white' : ''}`} style={{ backgroundColor: isActive('/blog') ? '#FF5573' : 'transparent' }} onClick={() => handleNavigation('/blog')}>Blogs</div>
        <div className="relative cursor-pointer">
            <img onClick={()=> navigate('/profile')} className="w-10 h-10 rounded-full" alt="avatar" title="Profile" style={{cursor:"pointer"}} src='/Avatar.png' />
        </div>
      </div>
    </div>
  );
};

export default Navbar
