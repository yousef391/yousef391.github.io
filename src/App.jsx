import "./App.css";
import Porfile from "./assets/profile.jpg";
import Project1 from "./assets/stockeep.png";
import Project2 from "./assets/hiking.png";
import Project3 from "./assets/needyy.png";
import Project4 from "./assets/BLoodAPP.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm youcef,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Mobile developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Experienced in both Flutter and Django, I specialize in
                  building sleek frontends and robust backends for seamless app
                  experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={Porfile}
                  className="rounded-image relative z-10 w-[280px] m-auto sm:w-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Stockkeep</h3>
                <p className="text-gray-400 text-sm mt-2">
                  StockKeep, crafted with Flutter for the frontend and Django
                  for the backend, seamlessly manages inventory with real-time
                  sync, insightful stock tracking, and advanced analytics,
                  empowering businesses with efficient operations and informed
                  decision-making.
                </p>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500
                  "
                    onClick={() =>
                      window.open(
                        "https://github.com/yousef391/stockeep",
                        "_blank"
                      )
                    }
                  >
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Hiking</h3>
                <p className="text-gray-400 text-sm mt-2">
                  "Hiking" lets you explore the outdoors with ease. Developed
                  with Flutter and Django, Hiking enables you to find hiking
                  groups in your location effortlessly, connecting you with
                  like-minded adventurers for unforgettable experiences on the
                  trails.
                </p>
                <div className="flex gap-2 mt-12">
                  <button
                    className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                    onClick={() =>
                      window.open(
                        "https://github.com/yousef391/hikingapp",
                        "_blank"
                      )
                    }
                  >
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Needy</h3>
                <p className="text-gray-400 text-sm mt-2">
                  "Needy App" is the ultimate platform for fostering community
                  generosity. Developed with Flutter and Firebase, Needy
                  empowers users to easily offer or find items they need,
                  promoting a culture of sharing and support. Whether it's
                  books, clothes, or household items, Needy connects people who
                  want to give with those who are in need, creating a vibrant
                  community where everyone can benefit.
                </p>
                <div className="flex gap-4 mt-12">
                  <button
                    className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                    onClick={() =>
                      window.open(
                        "https://github.com/yousef391/Bloodapp",
                        "_blank"
                      )
                    }
                  >
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                {" "}
                <img src={Project4} className="w-full h-auto" />{" "}
                <h3 className="text-2xl font-semibold mt-8"> BloodApp </h3>{" "}
                <p className="text-gray-400 text-sm mt-2">
                  {" "}
                  BloodApp: Your lifeline in times of need. Developed with
                  Flutter and Firebase, BloodApp seamlessly connects blood
                  donors with those in need, ensuring a swift and efficient
                  blood donation process.{" "}
                </p>{" "}
                <div className="flex gap-2 mt-12">
                  {" "}
                  <button
                    className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                    onClick={() =>
                      window.open(
                        "https://github.com/yousef391/Bloodapp",
                        "_blank"
                      )
                    }
                  >
                    {" "}
                    Checkout github{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Flutter</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Dart</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Django</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[30%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

            </div>
          </div>
        </section>
        {/* Additional skills section */}
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">
              Contact : yf.ouddane@esi-sba.dz
            </p>
          </div>
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
