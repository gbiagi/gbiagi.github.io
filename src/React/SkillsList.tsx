import React, { useState } from "react";

const CategoryIcons = {
  "Backend & APIs": (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M7 8l0 .01" />
      <path d="M7 16l0 .01" />

    </svg>
  ),
  "App Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Game Development": (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7.99999 8.5C7.99999 7.94772 7.55227 7.5 6.99999 7.5C6.4477 7.5 5.99999 7.94772 5.99999 8.5V9H5.49999C4.9477 9 4.49999 9.44771 4.49999 10C4.49999 10.5523 4.9477 11 5.49999 11H5.99999V11.5C5.99999 12.0523 6.4477 12.5 6.99999 12.5C7.55227 12.5 7.99999 12.0523 7.99999 11.5V11H8.49999C9.05227 11 9.49999 10.5523 9.49999 10C9.49999 9.44771 9.05227 9 8.49999 9H7.99999V8.5Z" fill="#0F1729"></path> <path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z" fill="#0F1729"></path> <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="#0F1729"></path> <path d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44771 14.4477 9 15 9C15.5523 9 16 9.44771 16 10Z" fill="#0F1729"></path> <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10C18 10.5523 18.4477 11 19 11Z" fill="#0F1729"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.1879 3 7.96237 3.25817 6.21782 3.5093C3.94305 3.83676 2.09096 5.51696 1.60993 7.7883C1.34074 9.05935 1.07694 10.5622 1.01649 11.8204C0.973146 12.7225 0.877981 13.9831 0.777155 15.1923C0.672256 16.4504 1.09148 17.7464 1.86079 18.6681C2.64583 19.6087 3.88915 20.2427 5.32365 19.8413C6.24214 19.5842 6.97608 18.9387 7.5205 18.3026C8.07701 17.6525 8.51992 16.9124 8.83535 16.3103C9.07821 15.8467 9.50933 15.5855 9.91539 15.5855H14.0846C14.4906 15.5855 14.9218 15.8467 15.1646 16.3103C15.4801 16.9124 15.923 17.6525 16.4795 18.3026C17.0239 18.9387 17.7578 19.5842 18.6763 19.8413C20.1108 20.2427 21.3541 19.6087 22.1392 18.6681C22.9085 17.7464 23.3277 16.4504 23.2228 15.1923C23.122 13.9831 23.0268 12.7225 22.9835 11.8204C22.923 10.5622 22.6592 9.05935 22.39 7.7883C21.909 5.51696 20.0569 3.83676 17.7821 3.5093C16.0376 3.25817 13.8121 3 12 3ZM6.50279 5.48889C8.22744 5.24063 10.3368 5 12 5C13.6632 5 15.7725 5.24063 17.4972 5.4889C18.965 5.70019 20.1311 6.77489 20.4334 8.20267C20.6967 9.44565 20.9332 10.8223 20.9858 11.9164C21.0309 12.856 21.1287 14.1463 21.2297 15.3585C21.2912 16.0956 21.0342 16.8708 20.6037 17.3866C20.1889 17.8836 19.7089 18.0534 19.2153 17.9153C18.8497 17.8129 18.4327 17.509 17.9989 17.0021C17.5771 16.5094 17.2144 15.9131 16.9362 15.3822C16.4043 14.3667 15.3482 13.5855 14.0846 13.5855H9.91539C8.65178 13.5855 7.59571 14.3667 7.06374 15.3822C6.78558 15.9131 6.42285 16.5094 6.00109 17.0021C5.56723 17.509 5.15027 17.8129 4.78463 17.9153C4.29109 18.0534 3.81102 17.8836 3.39625 17.3866C2.96576 16.8708 2.70878 16.0956 2.77024 15.3585C2.87131 14.1463 2.96904 12.856 3.01418 11.9164C3.06675 10.8223 3.30329 9.44565 3.56653 8.20267C3.86891 6.77489 5.03497 5.70019 6.50279 5.48889Z" fill="#0F1729">
      </path>
    </svg>

  ),
  "Databases": (
    < svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70" >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
      <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
      <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
    </svg >

  )

};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend & APIs": [
      "FastAPI",
      "Spring Boot",
      "NodeJS (express)",
    ],
    "App Development": [
      "Android (Java, Kotlin)",
      "Desktop: JavaFX/Swing, Kotlin & Compose Multiplatform",
      "Flutter",
    ],
    "Game Development": [
      "Unity(2D)",
      "LibGDX",
    ],
    "Databases": [
      "MySQL",
      "PL/SQL",
      "MongoDB",
    ],
  }

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""
                      }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${openItem === category
                  ? "max-h-[500px] pb-4 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
