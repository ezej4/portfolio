import getWordings from "../wordings";
import constants from "../constants";
import profilePhoto from "../public/assets/images/profile_photo_imp.jpg";
import about_me_photo from "../public/assets/images/about_me_imp.jpg?v=2";
import yaloLogo from '../public/assets/images/yalo_2.png';
import mlLogo from '../public/assets/images/mercado_libre.png';
import unvimeLogo from '../public/assets/images/unvime.png';
import rubikImage from '../public/assets/images/cube-transparent.png';
import cryptoResumeImage from '../public/assets/images/crypto_resume.png';

const AUTHOR = "Ezequiel Fabbroni";

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
        "<Software_engenieer />",
        "<Javascript_developer />",
        "<Fullstack_developer />",
        "<React_developer />",
        "${Node_developer}",
      ],
      image: {
        src: profilePhoto,
        alt: AUTHOR,
        blurDataUrl:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAKAAoDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwQI/8QAJhAAAQMCBAYDAAAAAAAAAAAAAQIDBAAFBhESIRUiQ0RRcaGywf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAHBEAAQUAAwAAAAAAAAAAAAAAAAEDESExBDJh/9oADAMBAAIRAxEAPwCLEeITa5qGY6VaQpMkkKyAOkJO3nk+aBhZSfRnKoaYkxqRDYeQtOlxtKx6IzqiAJM44rJ4qvfoD9qXj9R3tHCxkiwW7ftm/qKtTCNdP//Z",
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
        src: about_me_photo,
        blurDataUrl:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAUEAwUFBAUGBgUGCA4JCAcHCBEMDQoOFBEVFBMRExMWGB8bFhceFxMTGyUcHiAhIyMjFRomKSYiKR8iIyL/2wBDAQYGBggHCBAJCRAiFhMWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAKAAcDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAkEAABAwIEBwAAAAAAAAAAAAABAgMEBRMABiFBERQiIzFRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBf/EACERAAIBAwMFAAAAAAAAAAAAAAECAAQRQQMFEhMjQlGB/9oADAMBAAIRAxEAPwABUczMw5sprkn7MZVh/skWnE7KPj5w2xaVHcJwYLbcRTqnkpNzb3j5iSaiSX00SYQ84C48CshR6tAdfeCYDkJq6BPTaf/Z",
        alt: AUTHOR,
        width: isMobile ? 216 : 288,
        height: isMobile ? 326 : 435,
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
        "sass",
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
          logo: yaloLogo,
          subtitle: wordings.work_experience.yalo_subtitle,
          blurDataUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAMAAACA5l7/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEVDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfJDPfL///9BgmIaAAAAIXRSTlNbZ3VpBgcMKSENYyMlSVpreGJ6XCBXRnZyZXlfbTUrCg5vC+TuAAAAAWJLR0QhxGwNFgAAAAd0SU1FB+YIDRArKn8+VuwAAAA0SURBVAjXY2BgZGJmYWVj5+Bk4OLmYeDl4xcQFGIQFuERFeMXl5CUYhCQlpGVE+GUl1cAACYLAnhU7dYuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTEzVDE2OjQzOjM1KzAwOjAwP7ATKAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xM1QxNjo0MzozNSswMDowME7tq5QAAAAASUVORK5CYII=",
          desc: `<li>${wordings.work_experience.yalo_desc}</li>`,
        },

        {
          title: "Mercado Libre",
          logo: mlLogo,
          blurDataUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAMAAAAGcixRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX//7X//82IgEaelDlqZUWzpSTSwBbUwhrQvyHPvRi6qyF6cjacoMfCwLS/vJ6cn8XAwc3ExdO+skLBtEackjanmzA9QG2NhUGTij1CRWofJ31NTmR1cE2JgT+Kgj93cktRUWIhKHzZzWXNwVTKxJbMya/Z0IHYzGL4+Pz4+f7Q0ePd3u3n6PLc3ezz9Pv3+P7e0mDV08jl5e309fb////i4+7Kys7XzW/z3ALVx0LQzsDV1uTd3uvGxsjQxFLy3APUwhfezCHRxV3Kv17VxS/VwxY7BPJZAAAAInRSTlMAAAAAMZ3i/PzjnTFN2NlO2tv9/dHTR9bXSTCc4Pj44J0x8Ycg8AAAAAFiS0dENKmx6f0AAAAHdElNRQfmCA0QKhJOJ98zAAAAVUlEQVQI12NgYGFlY+fg5OJmZODhVVJWUVVT5+NnENDQ1NLW0dXTF2QQMjA0MjYxNTMXZhCxsLSytrG1sxdlEBN3cHRydnGVkGRgkpKWkZWTV1BkBgA6bAlw4Io0jQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0xM1QxNjo0MDozOCswMDowMLVQyesAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMTNUMTY6NDA6MzgrMDA6MDDEDXFXAAAAAElFTkSuQmCC",
          subtitle: wordings.work_experience.ml_subtitle,
          desc: `
            <li>${wordings.work_experience.ml_desc_1}</li>
            <li>${wordings.work_experience.ml_desc_2}</li>
            <li>${wordings.work_experience.ml_desc_3}</li>`,
        },

        {
          title: "Unvime",
          logo: unvimeLogo,
          blurDataUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABI1BMVEXJwbH////z8e1hSRkAAADw7enu6+bKwrKBb0nd2c7o5d7s6ePt6uXn49zY0sbj3tbv7ejv7eju6+bf2tDe2tDv7Ojt6uTUzsHq5+Dy8O7j39fq6eTq5uLs7Onu6uXq5t/d6e3n4djf2tDx7+rr6OHVz8Lk4Nju7Ofr6ePe2c7d2M7p5t/t6+bq5+Dm4tvX0sbt6+Xm4trp5t/q5+Dh3dTf29Hg29Li3tXv7Of18u3u6uTy8e/4+Pb4+PXx7+ru6+iq2+6Z0uXW3sn0z8vfvtbYzrra35vp7MeM0OuDwMPBvZPhibDIfLmPkLibwKrX5sbR5euqz9qdz+OWu+CVvuCg0OKs0d7e2M3Tz8TI0s3J0cvUz8Pi3NPn49vc1szn49z///83ecfzAAAAMHRSTlMAAAAAAAAAAAA3lca/gCFb4f7JNkHmxBus/GzhpOGlrfxuQ+fFG13jyzc5mcjCgyNTMSVYAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+YIDRAtAPLfOLwAAAB2SURBVAjXY2Bg5OTi5uHlY2JmYOEXMDA0EhQSZmUQETU2MTUztxATZ5CwtLK2sbWzl5RikHZwdHJ2cXVzl2GQ9fD08vbx9fOXY5APCAwKDgkNU1BkUFIOj4iMio5RUWVgUVOPDY+L19BkY2Bn1NLW0dXTZ+IAAGj0Ei8tmy49AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTEzVDE2OjQ0OjU2KzAwOjAwKusbSwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xM1QxNjo0NDo1NiswMDowMFu2o/cAAAAASUVORK5CYII=",
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
          title: wordings.projects.rubik_cube_title,
          desc: wordings.projects.rubik_cube_desc,
          cta: wordings.projects.rubik_cube_cta,
          image: {
            src: rubikImage,
            blurDataUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAMAAAA8eE0hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABDlBMVEXo6OjM08zx8fEAAADwKyvgAADv6e9YslgAhgAAggAAfgAAfwAAeQDdAAAAewAAdwAAsQAA/wDcAADbAADX19fo6Oje3t7h4eHO0c7v6+/u6+7r6erp6Ono6enp6+vlnp7PAAAliiVgqGCLu4u10LXO3c/m1dLrcHDuFhbnAAAAeQAAeQAAewAEfAQTiBWnPxrzAADqAADfAQEAeQAAegAAeQAAeAAAewCTKwDxAADtAADgAAAAeAAAegAAewAAewAAfgCdKgDxAADrAADeAAAAegAAfAAAegAAeQAAewCcKQDxAADsAADIAAAAdgAAeAAAewAAegAAfQCYLAD1AAC2AAAAbQAEdQBrPAD////yIGAiAAAAWXRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAsrGgsMTaDKvKSNWAht1NDNz9nYvBZ63uLS5NPeqA5t186/2MDTqgxf0dfU59Laoglf4NnI1cXUawEVTYWs3MRXAwwyK4mHCTUAAAABYktHRFmasvQYAAAAB3RJTUUH5ggNEC0w1AYIEAAAAGtJREFUCNdjYGBkEhEVE2dmYWVgk5CUkpaRlZNXYGBXVFJWUVVT19Bk4NDS1tHV0zcwNGLgNDYxNTO3sLSyZuCysbWzd3B0cnZh4HZ1c/fw9PL28WXg8fMPCAwKDgnlZeDj5xMIC48QFBIGAGl7D1tBJKF3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTEzVDE2OjQ1OjQzKzAwOjAwW7tfTAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xM1QxNjo0NTo0MyswMDowMCrm5/AAAAAASUVORK5CYII=",
            alt: "Rubik's cube logo",
            width: isMobile ? "60" : "180",
            height: isMobile ? "60" : "160",
          },
          href: "https://demo-rubik-cube.ezequielfabbroni.com/",
        },

        {
          title: wordings.projects.crypto_resume_title,
          desc: wordings.projects.crypto_resume_desc,
          cta: wordings.projects.crypto_resume_cta,
          image: {
            src: cryptoResumeImage,
            blurDataUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEW9uCWAcSZyXiVjTCauoyW5wAZbRCb//x5DJSYHACaDciWsoiWwqCKCdCallSO1nR+4nR6xmiCbjCRgTiiDdSaxnCHEoBqjkiNJNSmmliPBoBuUhia1nR+MfB+3nh43MA0PBgytmiE5KwUAAACUhyW9nx0AAAAAACuZiiW1nB/FnxmvjxgpIQUBAQB9cCeWiCWdjiVAOhENCgJSPgc0JwQAAAAAAAAAAAAAAAAAAAAAAADJoBfToBLXohLRnxPNohfFlBO8jxTOmxO2ihXbpBLYoxPJmBGpfw+zhw+zhxHOmxGxihPRnRF7WgxnSA2Tbgx7XApINwbSohXbpRLZohPXoROqgA4kGwNmTQjWohPcpRLKlxAsIQRtUgk3KQXKoRiTbwxoTgn///9hH3Q3AAAAO3RSTlMAAAAAAAAAAAAAAAAAKqbv/d56DizH+5AIq/dM8oz7qgvR9o5c8KgDYdr8+v7jIFNhkOb27rQMe6VdDlaLkF0AAAABYktHRGIruR08AAAAB3RJTUUH5ggNEC4WLSbeLgAAAHZJREFUCNdjYODl4xcQFBJmZGIQEbW2sbUTE5dgZpC0d3B0cnaRkmZhkHF1c/fw9PKWZWWQc/Xx9fMPCJRXYFAMCg4JDQuPUFJmUFGNdImKjomNU2NQ19DUitfWSUjUZWBj19M3MDQyNjFl4ODk4uYxM7ewtAIAz/sTGxzNWlMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDgtMTNUMTY6NDY6MTgrMDA6MDD6a77RAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA4LTEzVDE2OjQ2OjE4KzAwOjAwizYGbQAAAABJRU5ErkJggg==",
            alt: "Crypto resume logo",
            width: isMobile ? "60" : "170",
            height: isMobile ? "60" : "170",
          },
          href: "https://chrome.google.com/webstore/detail/crypto-resume/lkbmhfbogjfljikafcblcgdifgdliapj",
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
