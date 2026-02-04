import { useEffect, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLanguageContext } from "../components/LanguageContext";
import InfoPanel from "../components/InfoPanel";
import {
  IconBrandGithubFilled,
  IconBrandGitlab,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBuildings,
  IconCalendarWeek,
  IconFileCvFilled,
  IconFlag,
  IconMail,
  IconMap2,
  IconMapPin,
  IconSchool,
  IconSparkles,
} from "@tabler/icons-react";
import nodejsIcon from "../assets/icons/nodejs-favicon.png";
import djangoIcon from "../assets/icons/django-favicon.png";
import firebaseIcon from "../assets/icons/firebase-icon.png";
import laravelIcon from "../assets/icons/laravel-favicon.ico";
import mysqlIcon from "../assets/icons/mysql-icon.png";
import postgresqlIcon from "../assets/icons/postgresql-icon.png";
import mongodbIcon from "../assets/icons/mongodb-favicon.ico";
import reactIcon from "../assets/icons/react-favicon.ico";
import angularIcon from "../assets/icons/angular-favicon.ico";
import tailwindIcon from "../assets/icons/tailwindcss-favicon.ico";
import bootstrapIcon from "../assets/icons/bootstrap-icon.png";
import dockerIcon from "../assets/icons/docker-favicon.ico";
import linuxIcon from "../assets/icons/linux-icon.png";
import gitIcon from "../assets/icons/git-favicon.ico";
import vscodeIcon from "../assets/icons/vscode-favicon.ico";

import { Link as ScrollLink } from "react-scroll";

import portfolioHeroImage from "../assets/portfolio-image4.jpg";
import portfolioAboutImage from "../assets/portfolio-image2.jpg";

import { Trans } from "react-i18next";
import { RevealDown, RevealUp } from "../components/RevealMotions";
import type { Skill } from "../lib/types";

export default function Portfolio() {
  const { t } = useTranslation(["navbar", "portfolio", "curriculum_vitae"]);
  const location = useLocation();
  const { setLanguage } = getLanguageContext();

  useEffect(() => {
    if (location.pathname === "/portafolio") {
      setLanguage("es");
    } else if (location.pathname === "/portfolio") {
      setLanguage("en");
    }
  }, [location]);

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("2000-03-21");
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  function SkillCard({ title, skills }: { title: string; skills: Skill[] }) {
    return (
      <article className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 skill-card bg-gradient-to-br from-red-700 to-amber-500" />
        <div className="absolute inset-0 skill-card-inner bg-neutral-800 origin-center scale-[.96]">
          <ul className="grid grid-cols-3 gap-4 p-8 place-content-center h-full">
            {skills.map((skill, i) => (
              <li key={i} className="flex flex-col items-center gap-2">
                <p className="flex bg-gradient-to-bl from-red-600 to-amber-500 rounded-full p-4">
                  <span className="flex w-10 h-10">{skill.icon}</span>
                </p>
                <p className="text-white text-center text-sm leading-tight">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="absolute top-0 left-0 bg-gradient-to-tl from-red-500 to-amber-500 ml-0.5 mt-0.5 w-[162px] text-base font-bold text-white h-8 flex justify-center items-center rounded">
          {title}
        </h2>
      </article>
    );
  }

  function ShowLinks(): JSX.Element {
    return (
      <address className="flex gap-4 justify-center ">
        <a
          href="https://github.com/dev-sfuentes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg"
        >
          <IconBrandGithubFilled className="transition-transform duration-500 ease-in-out w-6 h-6 hover:duration-300 hover:scale-125 hover:text-[#a13e2d]" />
        </a>
        <a
          href="https://gitlab.com/dev-sfuentes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg"
        >
          <IconBrandGitlab className="fill-white hover:fill-[#a13e2d] transition-transform duration-500 ease-in-out w-6 h-6 hover:duration-300 hover:scale-125 hover:text-[#a13e2d]" />
        </a>
        <a
          href="https://linkedin.com/in/dev-sfuentes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg"
        >
          <IconBrandLinkedinFilled className="transition-transform duration-500 ease-in-out w-6 h-6 hover:duration-300 hover:scale-125 hover:text-[#a13e2d]" />
        </a>
        <a
          href="https://instagram.com/sfuentes616"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg"
        >
          <IconBrandInstagramFilled className="transition-transform duration-500 ease-in-out w-6 h-6 hover:duration-300 hover:scale-125 hover:text-[#a13e2d]" />
        </a>
      </address>
    );
  }

  function ShowContact(): JSX.Element {
    return (
      <div className="flex gap-x-5 justify-center">
        <Link
          to="/curriculum-vitae"
          type="button"
          className="flex shadow cursor-pointer gap-x-2 items-center text-white bg-neutral-700 hover:bg-[#a17c2d] px-6 py-2 rounded-full border-2 border-[#a17c2d] transition-colors duration-300"
        >
          <IconFileCvFilled />
          {t("portfolio:resume")}
        </Link>
        <a
          href="mailto:dev@sfuentes.cl"
          className="flex shadow cursor-pointer gap-x-2 items-center text-white bg-neutral-700 hover:bg-[#a13e2d] px-6 py-2 rounded-full border-2 border-[#a13e2d] transition-colors duration-300"
        >
          <IconMail />
          {t("portfolio:contact.button")}
        </a>
      </div>
    );
  }

  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-10 bg-[#111] shadow-md">
        <ul className="mx-auto flex w-full max-w-[80%] justify-center gap-6 py-3">
          {[
            { id: "hero", label: t("navbar:home") },
            { id: "skills", label: t("navbar:skills") },
            { id: "certificates", label: t("navbar:certificates") },
            { id: "about", label: t("navbar:about") },
            { id: "contact", label: t("navbar:contact") },
          ].map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                spy
                offset={-10}
                activeClass="active"
                className="
            text-red-600 hover:text-red-400
            [&.active]:text-yellow-500
            font-medium tracking-wide transition-colors duration-200
            cursor-pointer select-none
          "
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="hero"
        className="grid h-screen items-center md:justify-around px-10 bg-neutral-800"
      >
        <div className="grid gap-y-20 gap-x-20 lg:gap-x-0 md:grid-cols-2 max-w-[1500px] items-center">
          <div className="grid text-white gap-y-4 md:gap-y-12">
            <header>
              <h1 className="text-[20px] md:text-[30px] font-bold">
                {t("portfolio:i_am.title")}
              </h1>

              <div className="text-[40px] md:text-[60px]  font-bold">
                <span className="text-amber-400">Full Stack </span>
                <span>Developer</span>
              </div>

              <div className="text-lg">
                <Trans
                  i18nKey="portfolio:i_am.description"
                  components={{ bold: <strong /> }}
                />
              </div>
            </header>

            <ShowLinks />

            <ShowContact />
          </div>

          <div className="grid justify-center items-center md:justify-end md:items-end">
            <div className="rounded-full bg-gradient-to-r from-[#e0a604] from-10% via-[#ff5100] via-50% to-[#ce0707] to-100% p-1">
              <div className=" p-8 rounded-full bg-neutral-800">
                <img
                  className="md:w-120 w-80 grayscale rounded-full "
                  src={portfolioHeroImage}
                  alt="A picture of mine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-neutral-700">
        <div className="grid py-10 max-w-[1200px] h-screen mx-auto ">
          <h2 className="text-2xl font-bold text-[#a13e2d]">
            {t("portfolio:skills.title")}
          </h2>
          <div className="grid md:grid-cols-2 overflow-auto md:overflow-hidden">
            <RevealUp>
              <SkillCard
                title="Frontend"
                skills={[
                  {
                    icon: <img src={reactIcon} alt="React FavIcon" />,
                    name: "React",
                  },
                  {
                    icon: <img src={angularIcon} alt="Angular FavIcon" />,
                    name: "Angular",
                  },
                  {
                    icon: <img src={tailwindIcon} alt="TailwindCSS FavIcon" />,
                    name: "TailwindCSS",
                  },
                  {
                    icon: (
                      <a
                        target="_blank"
                        href="https://icons8.com/icon/g9mmSxx3SwAI/bootstrap"
                      >
                        <img src={bootstrapIcon} alt="Bootstrap Icon" />
                      </a>
                    ),
                    name: "Bootstrap",
                  },
                ]}
              />
            </RevealUp>
            <RevealDown delay={0.1}>
              <SkillCard
                title="Backend"
                skills={[
                  {
                    icon: <img src={djangoIcon} alt="Django FavIcon" />,
                    name: "Django",
                  },
                  {
                    icon: <img src={nodejsIcon} alt="Node.js FavIcon" />,
                    name: "Node.js",
                  },
                  {
                    icon: <img src={laravelIcon} alt="Laravel FavIcon" />,
                    name: "Laravel",
                  },
                ]}
              />
            </RevealDown>
            <RevealUp delay={0.2}>
              <SkillCard
                title={t("portfolio:skills.databases")}
                skills={[
                  {
                    icon: (
                      <a
                        target="_blank"
                        href="https://icons8.com/icon/62452/firebase"
                      >
                        <img src={firebaseIcon} alt="Firebase Icon" />
                      </a>
                    ),
                    name: "Firebase",
                  },
                  {
                    icon: (
                      <a
                        target="_blank"
                        href="https://icons8.com/icon/qGUfLiYi1bRN/my-sql"
                      >
                        <img src={mysqlIcon} alt="MySQL Icon" />
                      </a>
                    ),
                    name: "MySQL",
                  },
                  {
                    icon: (
                      <a
                        target="_blank"
                        href="https://icons8.com/icon/38561/postgresql"
                      >
                        <img src={postgresqlIcon} alt="PostgreSQL Icon" />
                      </a>
                    ),
                    name: "PostgreSQL",
                  },
                  {
                    icon: <img src={mongodbIcon} alt="MongoDB FavIcon" />,
                    name: "MongoDB",
                  },
                ]}
              />
            </RevealUp>
            <RevealDown delay={0.5}>
              <SkillCard
                title={t("portfolio:skills.tools_n_env")}
                skills={[
                  {
                    icon: <img src={gitIcon} alt="Git FavIcon" />,
                    name: "Git",
                  },
                  {
                    icon: <img src={vscodeIcon} alt="VS Code FavIcon" />,
                    name: "VS Code",
                  },
                  {
                    icon: (
                      <a
                        target="_blank"
                        href="https://icons8.com/icon/m6O2bFdG70gw/linux"
                      >
                        <img src={linuxIcon} alt="Linux Icon" />
                      </a>
                    ),
                    name: "Linux",
                  },
                  {
                    icon: <img src={dockerIcon} alt="Docker FavIcon" />,
                    name: "Docker",
                  },
                ]}
              />
            </RevealDown>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="bg-[url('/jason-mavrommatis-GPPAjJicemU-unsplash.jpg')] min-h-[60vh] max-h-screen bg-fixed bg-cover bg-center"
      >
        <RevealUp className="w-4/5 mx-auto flex gap-x-20 py-20 ">
          <div className="hidden xl:block">
            <img
              src={portfolioAboutImage}
              className="rounded-md w-240 transform -scale-x-100"
              alt="A picture of mine"
            />
          </div>

          <div className="flex flex-col gap-y-6 bg-black/50 backdrop-blur-xs px-12 py-6 rounded ">
            <header className="flex flex-col gap-y-2">
              <h2 className="text-4xl font-bold text-[#ce0707]">
                {t("portfolio:about.title")}
              </h2>

              <span className="text-[#b2b2b2] text-base md:text-lg grid gap-y-4">
                <Trans
                  i18nKey="portfolio:about.description"
                  components={{ p: <p /> }}
                />
              </span>
            </header>

            <ul className="grid md:grid-cols-2 text-sm gap-y-3 text-white">
              <li className="flex gap-x-2 items-center">
                <IconMap2 className="w-5 h-5" />
                <p className="font-bold ">{t("portfolio:about.location")}:</p>
                <p>Punta Arenas, Chile</p>
              </li>
              <li className="flex gap-x-2 items-center">
                <IconCalendarWeek className="w-5 h-5" />
                <p className="font-bold">{t("portfolio:about.age")}:</p>
                <p>{getAge()}</p>
              </li>
              <li className="flex gap-x-2 items-center">
                <IconFlag className="w-5 h-5" />
                <p className="font-bold">
                  {t("portfolio:about.nationality.title")}:
                </p>
                <p>{t("portfolio:about.nationality.description")}</p>
              </li>
              <li className="flex gap-x-2 items-center">
                <IconSparkles className="w-5 h-5" />
                <p className="font-bold">
                  {t("portfolio:about.interests.title")}:
                </p>
                <p>{t("portfolio:about.interests.description")}</p>
              </li>
              <li className="flex gap-x-2 items-center">
                <IconSchool className="w-5 h-5" />
                <p className="font-bold">{t("portfolio:about.study.title")}:</p>
                <p>{t("portfolio:about.study.description")}</p>
              </li>
              <li className="flex gap-x-2 items-center">
                <IconBuildings className="w-5 h-5" />
                <p className="font-bold">{t("portfolio:about.work.title")}:</p>
                <p>{t("portfolio:about.work.description")}</p>
              </li>
            </ul>
          </div>
        </RevealUp>
      </section>
      <footer
        id="contact"
        className="bg-neutral-900  text-white flex flex-col justify-around items-center gap-y-4 py-6 min-h-[40vh] "
      >
        <div className="max-w-[70%] items-center flex flex-col gap-y-10">
          <h1 className="text-2xl font-bold">{t("portfolio:contact.title")}</h1>

          <p className="text-center text-lg">
            {t("portfolio:contact.description")}
          </p>

          <div className="flex gap-x-2 items-center">
            <IconMapPin />
            <p>Punta Arenas, Chile</p>
          </div>
        </div>

        <ShowContact />

        <ShowLinks />
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Santiago Fuentes
        </p>
      </footer>
      <InfoPanel />
    </main>
  );
}
