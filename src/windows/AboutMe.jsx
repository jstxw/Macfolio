import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import useWindowStore from "../store/Store";
import LogicsLogo from "../assets/Logics.png";
import WaterlooLogo from "../assets/Waterloo.png";
import MelomedLogo from "../assets/Melomed.png";
import PlumaLogo from "../assets/Pluma_Icon.png";
import SummerHacksLogo from "../assets/SummerHacks.png";
import ProfilePicture from "../assets/picture.jpg";

const AboutMe = ({ closeWindow, minimizeWindow }) => {
  const openWindow = useWindowStore((state) => state.openWindow);

  // Easy to edit content
  const profile = {
    name: "Justin Tingxuan Wang",
    program: "Engineering @ University of Waterloo",
    imageUrl: ProfilePicture, // Set to null or empty string to show placeholder
  };

  const aboutPoints = [
    { type: "header", content: "Prev." },
    {
      type: "indented",
      content: (
        <>
          Software/Cloud Engineer @{" "}
          <a
            href="https://logicstechnology.com/?srsltid=AfmBOooEudhE-FzF7wx5ztd2jQGJ8fxX9y4ng-2kuaQBd7czcqTcEtx1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group no-underline"
          >
            <img
              src={LogicsLogo}
              alt="Logics Technology"
              className="inline-block w-6 h-6 mr-2 align-middle"
            />
            Logics Technology
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </>
      ),
    },
    { type: "header", content: "Curr." },
    {
      type: "indented",
      content: (
        <>
          Management Engineering @{" "}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group no-underline"
          >
            <img
              src={WaterlooLogo}
              alt="UWaterloo"
              className="inline-block w-6 h-6 mr-2 align-middle"
            />
            UWaterloo
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </>
      ),
    },

    {
      type: "indented",
      content: (
        <>
          Software Developer @{" "}
          <a
            href="https://www.melomed.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group no-underline"
          >
            <img
              src={MelomedLogo}
              alt="MeloMed"
              className="inline-block w-6 h-6 mr-2 align-middle"
            />
            MeloMed
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </>
      ),
    },
    {
      type: "indented",
      content: (
        <>
          Organizer @{" "}
          <a
            href="https://www.linkedin.com/company/hackthesummer/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group no-underline"
          >
            <img
              src={SummerHacksLogo}
              alt="SummerHacks"
              className="inline-block w-6 h-6 mr-2 align-middle"
            />
            SummerHacks
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </>
      ),
    },
    {
      type: "indented",
      content: (
        <>
          Building{" "}
          <a
            href="https://github.com/jstxw/Pluma"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group no-underline"
          >
            <img
              src={PlumaLogo}
              alt="Pluma"
              className="inline-block w-6 h-6 mr-2 align-middle"
            />
            Pluma
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>{" "}
          - Helping badminton players improve through structured drills, shot
          techniques, and interactive 3D training visualizations
        </>
      ),
    },
    { type: "header", content: "Other." },

    {
      type: "indented",
      content: "Avid photographer and badminton player!!",
    },
    {
      type: "indented",
      content: (
        <>
          Check out my other{" "}
          <span
            onClick={() => openWindow("Projects")}
            className="relative inline-block group no-underline italic cursor-pointer"
          >
            PROJECTS
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
        </>
      ),
    },
  ];

  return (
    <div id="aboutme" className="font-['Georama']">
      <div id="window-header">
        <WindowControls
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
        />
        <h2>About Me</h2>
        <div className="w-14" />
      </div>

      <div className="flex flex-row items-start gap-24 w-full mx-auto py-32 bg-white px-20">
        {/* Left Column: Profile Image */}
        <div className="w-96 flex-shrink-0 flex flex-col items-center">
          {profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt={`Profile photo of ${profile.name}`}
              className="w-80 h-80 object-cover rounded-full"
            />
          ) : (
            <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xl">
              Upload image
            </div>
          )}
          <h1 className="mt-12 text-4xl italic font-semibold font-georama text-black text-center">
            {profile.name}
          </h1>
          <p className="text-2xl mt-8 text-black font-serif text-center">
            {profile.program}
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/jstxw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-zinc-300 transition-colors"
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/justin-tingxuan-wang-677899268/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-zinc-300 transition-colors"
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:j2998wan@uwaterloo.ca"
              className="text-black hover:text-zinc-300 transition-colors"
            >
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h1 className="relative inline-block group text-5xl font-serif font-bold text-black mb-4">
              about me.
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </h1>
          </div>
          <ul className="space-y-2">
            {aboutPoints.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 ${
                  point.type === "indented" ? "ml-8" : ""
                }`}
              >
                {point.type === "header" ? (
                  <span className="text-2xl text-zinc-500font-semibold leading-relaxed font-georama">
                    {point.content}
                  </span>
                ) : (
                  <>
                    <span className="text-2xl text-black mt-1">➤</span>
                    <span className="text-2xl text-black leading-relaxed">
                      {point.content}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AboutMeWindow = WindowWrapper(AboutMe, "About_Me");

export default AboutMeWindow;
