import getWordings from "../wordings";
import constants from "../constants";

const AUTHOR = "Ezequiel Fabbroni";
const HOST = "https://portfolio-ezej4.vercel.app";

const getdata = (lan, isMobile) => {
  const wordings = getWordings(lan) || getWordings("GB");
  const { pageSections } = constants;

  const data = {
    nav_bar: {
      items: [
        {
          name: pageSections.header.name,
          text: wordings.nav_bar.header,
        },
        {
          name: pageSections.about_me.name,
          text: wordings.nav_bar.about_me,
        },
        {
          name: pageSections.technologies.name,
          text: wordings.nav_bar.technologies,
        },
        {
          name: pageSections.work_experience.name,
          text: wordings.nav_bar.work_experience,
        },
        {
          name: pageSections.projects.name,
          text: wordings.nav_bar.projects,
        },
        {
          name: pageSections.contact.name,
          text: wordings.nav_bar.contact,
        },
      ],
      langs: {
        availables: ["ES", "GB"],
        default: "GB",
      },
    },
    header: {
      title: AUTHOR,
      subtitles: [
        "<software_engenieer />",
        "<javascript_developer />",
        "<Fullstack_developer />",
        "<react_developer />",
        "<node_developer />",
      ],
      image: {
        src: `${HOST}/assets/images/profile_photo.jpg`,
        alt: AUTHOR,
        width: isMobile ? "200" : "300",
        height: isMobile ? "200" : "300",
      },
    },
    about_me: {
      text: `<p> 
                ${wordings.about_me.first}<br />
                ${wordings.about_me.second}<br />
                ${wordings.about_me.third}
            </p>
            <p>${wordings.about_me.fourth}</p>
            <p>${wordings.about_me.fith}</p>
          `,

      image: {
        src: `${HOST}/assets/images/about_me.jpg`,
        alt: AUTHOR,
        width: 180,
        height: 260,
      },
    },
    technologies: {
      title: wordings.technologies.title,
      list: [
        "react",
        "javascript",
        "typescript",
        "node",
        "nextjs",
        "html5",
        "ccs3",
        "git",
        "sql",
        "firebase",
        "jest",
        "datadog",
      ],
    },
    work_experience: {
      jobs: [
        {
          title: "Yalo",
          logo: `${HOST}/assets/images/yalo.png`,
          subtitle: wordings.work_experience.yalo_subtitle,
          desc: `<li>${wordings.work_experience.yalo_desc}</li>`,
        },

        {
          title: "Mercado Libre",
          logo: `${HOST}/assets/images/mercado_libre.png`,
          subtitle: wordings.work_experience.ml_subtitle,
          desc: `
            <li>${wordings.work_experience.ml_desc_1}</li>
            <li>${wordings.work_experience.ml_desc_2}</li>
            <li>${wordings.work_experience.ml_desc_3}</li>`,
        },

        {
          title: "Unvime",
          logo: `${HOST}/assets/images/unvime.png`,
          subtitle: wordings.work_experience.unvime_subtitle,
          desc: `
              <li>${wordings.work_experience.unvime_desc_1}</li>
              <li>${wordings.work_experience.unvime_desc_2}</li>`,
        },
      ],
    },
    projects: {
      title: wordings.projects.title,
      list: [
        {
          title: wordings.projects.crypto_resume_title,
          desc: wordings.projects.crypto_resume_desc,
          cta: wordings.projects.crypto_resume_cta,
          image: {
            src: `${HOST}/assets/images/crypto_resume.png`,
            alt: "Crypto resume logo",
            width: isMobile ? "60" : "170",
            height: isMobile ? "60" : "170",
          },
          href: "https://chrome.google.com/webstore/detail/crypto-resume/lkbmhfbogjfljikafcblcgdifgdliapj",
        },
        {
          title: wordings.projects.rubik_cube_title,
          desc: wordings.projects.rubik_cube_desc,
          cta: wordings.projects.rubik_cube_cta,
          image: {
            // src:  `${HOST}/assets/images/cube-transparent`png",
            alt: "Rubik's cube logo",
            width: isMobile ? "60" : "180",
            height: isMobile ? "60" : "160",
          },
          href: "https://rubik-d01c0.firebaseapp.com/",
        },
      ],
    },
    contact: {
      titles: [wordings.contact.title_1, wordings.contact.title_2],
      subtitle: wordings.contact.subtitle,
      icons: [
        {
          name: "linkedin",
          href: "https://www.linkedin.com/in/ezequiel-fabbroni-b59536120/",
        },
        {
          name: "gmail",
          href: "mailto:ezequieljfabbroni@gmail.com",
        },
      ],
    },
  };

  return data;
};

export default getdata;
