import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './homePage.css'; // Ensure the CSS file is in your project directory
import Search from '@mui/icons-material/Search';

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="top-section">
        <div className="content">
          <h1 className="title-home font-gilroy-bold" style={{color:"#FF5573"}}>Your Passport to Academic Excellence :</h1>
          <p className="subtitle">Explore, Learn, and Thrive with Study Abroad Application</p>
          <button className="explore-button mt-3" onClick={() => navigate('/courses')}>
            Explore Courses <img src="/chevronsright.svg" alt="Right Arrow" />
          </button>
        </div>
        <div className="image-container">
          <img className="main-image" src="/home.png" alt="Home" />
        </div>
      </div>
      <div className="search-section">
      <div className="w-[104.875rem] rounded-xl bg-lavenderblush flex flex-col items-start justify-start py-[2rem] px-[5rem] box-border gap-[0.75rem] max-w-full mq1275:pl-[2.5rem] mq1275:pr-[2.5rem] mq1275:box-border">
          <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-center py-[1.125rem] px-[0rem] text-left text-[2.5rem] text-text  ">
            <h3 className="m-0 h-[3.063rem] w-[20.938rem] relative text-inherit font-normal font-inherit inline-block mq750:text-[2rem] mq450:text-[1.5rem] font-gilroy-semibold">
              Search Courses
            </h3>
          </div>
          <div className="self-stretch rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] border-[1px] border-solid border-darkgray-200">
          <div className="flex-1 flex flex-row items-start justify-center min-w-[58rem] max-w-full [row-gap:20px] mq1275:flex-wrap mq1275:min-w-full font-gilroy-medium">
          <div className="flex-1 box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] min-w-[22.313rem] max-w-full border-r-[1px] border-solid border-darkgray-200 mq750:min-w-full">
            <div className="w-full h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem] ">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                alt=""
                src="/book.svg"
              />
              <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[3.375rem] p-0 mq450:text-[1.375rem]"
                placeholder="Course"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] max-w-full border-r-[1px] border-solid border-darkgray-200 mq750:min-w-full">
            <div className="w-full h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem]">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                alt=""
                src="/school.svg"
              />
              <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[2.938rem] p-0 mq450:text-[1.375rem]"
                placeholder="Intake"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] box-border min-w-[22.313rem] max-w-full mq750:min-w-full">
            <div className="h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem]">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/calendar.svg"
              />
                <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[2.938rem] p-0 mq450:text-[1.375rem]"
                placeholder="Year"
                type="text"
              />
            </div>
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/courses-list")}
          className="h-[5.25rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-crimson-100 flex flex-row items-center justify-start py-[1.063rem] px-[1.25rem] box-border"
        >
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[0.625rem]">
            <Search />
          </div>
        </div>          
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default HomePage;
