import Bulb from "./icons/bulb";
import Code from "./icons/code";
import Laptop from "./icons/laptop";
import ChevronDown from "./icons/chevron_down";
import ChevronUp from "./icons/chevron_up";
import Logo from "./icons/logo";
import ThemeSwitch from "./icons/theme_switch";
import SpainFlag from "./icons/spain_flag";
import EnglandFlag from "./icons/england_flag";
import Node from "./icons/node";
import Javascript from "./icons/javascript";
import Typescript from "./icons/typescript";
import React from "./icons/react";
import Nextjs from "./icons/nextjs";
import Html5 from "./icons/html5";
import Css3 from "./icons/css3";
import Git from "./icons/git";
import Sql from "./icons/sql";
import Angular from "./icons/angular";
import Firebase from "./icons/firebase";
import Case from "./icons/case";
import Jest from "./icons/jest";
import Datadog from "./icons/datadog";
import Linkedin from './icons/linkedin';
import Gmail from './icons/gmail';

const iconMapper = {
  bulb: Bulb,
  code: Code,
  laptop: Laptop,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  logo: Logo,
  themeSwitch: ThemeSwitch,
  spainFlag: SpainFlag,
  englandFlag: EnglandFlag,
  node: Node,
  javascript: Javascript,
  typescript: Typescript,
  react: React,
  nextjs: Nextjs,
  html5: Html5,
  ccs3: Css3,
  git: Git,
  sql: Sql,
  angular: Angular,
  firebase: Firebase,
  case: Case,
  jest: Jest,
  datadog: Datadog,
  linkedin: Linkedin,
  gmail: Gmail,
};

const getIcon = (name, className) => {
  const CurrentIcon = iconMapper[name] || iconMapper.bulb;
  return <CurrentIcon className={className} width="100" />;
};

const Icon = ({ name, className, onClick }) => {
  const currentIcon = getIcon(name, className);
  return (
    <span style={{ display: "contents" }} onClick={onClick}>
      {currentIcon}
    </span>
  );
};

export default Icon;
