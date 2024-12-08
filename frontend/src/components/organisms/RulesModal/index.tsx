'use client';
import Button from 'frontend/src/components/atoms/Button';
import { CustomScrollbar } from 'frontend/src/components/molecules/CustomScrollbar';
import RulesModalList from 'frontend/src/components/molecules/RulesModalList';
import useAboutModalStore from 'frontend/src/store/AboutModalStore';

const AboutModal = () => {
  const { setIsAboutModalStore } = useAboutModalStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <section className="bg-[#1e1e2f] w-[60%] h-[90%] shadow-lg rounded-md flex flex-col">
        <header className="flex justify-between items-center bg-[#2a2a40] h-[77px] rounded-t-md border-b-[1px] border-[#323250]">
          <h2 className="text-xl text-[#e0e0e0] font-semibold mx-auto">
            About
          </h2>
        </header>

        <CustomScrollbar>
          <main className="p-5 flex-grow flex flex-col gap-4">
            <p className="text-lg text-[#e0e0e0] font-semibold text-center">
              This graph shows the recommended order to learn different
              algorithms topics.
            </p>
            <RulesModalList />
            <p className="text-lg text-[#e0e0e0] font-semibold text-center">
              See below for more details
            </p>
            <iframe
              width="100%"
              height="435"
              src="https://www.youtube.com/embed/jgQjes7MgTM?si=Z5H37t98xP-FAYF0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </main>
        </CustomScrollbar>

        <footer className="flex justify-center items-center h-[68px] border-t-[1px] border-[#323250] w-full">
          <Button
            onClick={() => setIsAboutModalStore(false)}
            className="text-center rounded-md  bg-transparent border-[3px] text-[12px]  border-[#f14688] hover:bg-[#f14688] text-[#f14688] hover:text-white  font-bold px-3.5 transition-colors duration-200 transform ease-linear"
          >
            Close
          </Button>
        </footer>
      </section>
    </div>
  );
};

export default AboutModal;
