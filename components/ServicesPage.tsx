"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiMonitor, FiServer, FiDatabase, FiCloud, FiSmartphone, FiPenTool, FiImage, FiCpu, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import styles from "./ServicesPage.module.css";
import InnerBanner from "./InnerBanner";
import FinalCta from "./FinalCta";
import TiltCard from "./TiltCard";

import { 
  SiMiro, SiNotion, SiFigma, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPhp, SiLaravel, SiFramer, SiSketch, SiShopify, SiStripe, SiGraphql, 
  SiDocker, SiPostgresql, SiTypescript, SiFlutter, SiFirebase, SiSwift, 
  SiGithubactions, SiLinux 
} from "react-icons/si";
import { FaAws, FaCubes, FaPalette, FaImage, FaVideo } from "react-icons/fa6";

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    'Miro': <SiMiro />,
    'Notion': <SiNotion />,
    'Figma': <SiFigma />,
    'Maze': <FaCubes />,
    'Illustrator': <FaPalette />,
    'Photoshop': <FaImage />,
    'After Effects': <FaVideo />,
    'React': <SiReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <SiNodedotjs />,
    'PHP': <SiPhp />,
    'Laravel': <SiLaravel />,
    'Framer': <SiFramer />,
    'Sketch': <SiSketch />,
    'Principle': <FaCubes />,
    'Shopify': <SiShopify />,
    'Stripe': <SiStripe />,
    'GraphQL': <SiGraphql />,
    'AWS': <FaAws />,
    'Docker': <SiDocker />,
    'PostgreSQL': <SiPostgresql />,
    'TypeScript': <SiTypescript />,
    'React Native': <SiReact />,
    'Flutter': <SiFlutter />,
    'Firebase': <SiFirebase />,
    'Swift': <SiSwift />,
    'GitHub Actions': <SiGithubactions />,
    'Linux': <SiLinux />,
  };
  return icons[name] || <FaCubes />;
};

/* ─────────── DATA ─────────── */
const overviewServices = [
  { num: "01", name: "Web Development", desc: "Fast, responsive websites and web apps built for performance and scale.", href: "#web-dev" },
  { num: "02", name: "UI/UX & Product Design", desc: "Intuitive interfaces and design systems that users love.", href: "#design" },
  { num: "03", name: "E-Commerce", desc: "High-converting online stores powered by modern commerce technology.", href: "#ecommerce" },
  { num: "04", name: "Custom Software", desc: "Bespoke digital platforms solving real operational problems.", href: "#software" },
  { num: "05", name: "Mobile Applications", desc: "Polished mobile experiences for iOS, Android, and beyond.", href: "#mobile" },
  { num: "06", name: "Cloud & DevOps", desc: "Reliable infrastructure and deployment pipelines behind every product.", href: "#cloud" },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Understand the business, users, goals, and challenges in depth." },
  { num: "02", title: "Define", desc: "Turn requirements into a clear product strategy and roadmap." },
  { num: "03", title: "Design", desc: "Create the visual language, UX, and interaction system." },
  { num: "04", title: "Develop", desc: "Build scalable, maintainable, production-ready technology." },
  { num: "05", title: "Launch", desc: "Test, optimise, deploy, and bring the product to life." },
  { num: "06", title: "Scale", desc: "Improve, maintain, and evolve the product over time." },
];

const techCategories = [
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/wordpress.svg", color: "21759B" },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/shopify.svg", color: "7AB55C" },
      { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg", color: "F26322" },
      { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/woocommerce.svg", color: "96588A" },
      { name: "BigCommerce", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/bigcommerce.svg", color: "121118" },
      { name: "Drupal", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/drupal.svg", color: "0678BE" },
      { name: "Joomla", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/joomla.svg", color: "5091CD" },
      { name: "Webflow", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/webflow.svg", color: "4353FF" },
      { name: "Contentful", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/contentful.svg", color: "2478CC" },
      { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/strapi.svg", color: "4945FF" },
      { name: "Ghost", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/ghost.svg", color: "15171A" },
      { name: "Squarespace", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/squarespace.svg", color: "000000" },
      { name: "PrestaShop", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/prestashop.svg", color: "DF0067" },
      { name: "OpenCart", icon: "https://www.vectorlogo.zone/logos/opencart/opencart-icon.svg", color: "23AEDB" },
      { name: "HubSpot", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/hubspot.svg", color: "FF7A59" },
      { name: "NopCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", color: "4AB6E8" },
      { name: "Umbraco", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/umbraco.svg", color: "3544B1" },
      { name: "Craft CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/craftcms.svg", color: "E5422B" },
      { name: "Wix", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/wix.svg", color: "FAAD4D" },
      { name: "Salesforce", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/salesforce.svg", color: "00A1E0" },
      { name: "Adobe Commerce", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobe.svg", color: "FF0000" },
      { name: "Sitecore", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sitecore.svg", color: "FF1F38" }
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg", color: "E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg", color: "1572B6" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg", color: "F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg", color: "3178C6" },
      { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", color: "61DAFB" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/vuedotjs.svg", color: "4FC08D" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/angular.svg", color: "DD0031" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg", color: "000000" },
      { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nuxtdotjs.svg", color: "00DC82" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sass.svg", color: "CC6699" },
      { name: "Less", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/less.svg", color: "1D365D" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg", color: "06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg", color: "7952B3" },
      { name: "GSAP", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/greensock.svg", color: "88CE02" },
      { name: "Three.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/threedotjs.svg", color: "000000" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/vite.svg", color: "646CFF" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/webpack.svg", color: "8DD6F9" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/redux.svg", color: "764ABC" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/jquery.svg", color: "0769AD" },
      { name: "Storybook", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/storybook.svg", color: "FF4785" }
    ]
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg", color: "339933" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg", color: "3776AB" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg", color: "777BB4" },
      { name: "Microsoft .NET", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/dotnet.svg", color: "512BD4" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/csharp.svg", color: "239120" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/openjdk.svg", color: "ED8B00" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/go.svg", color: "00ADD8" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/django.svg", color: "092E20" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/laravel.svg", color: "FF2D20" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg", color: "000000" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastapi.svg", color: "009688" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/graphql.svg", color: "E10098" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/postman.svg", color: "FF6C37" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg", color: "2496ED" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/kubernetes.svg", color: "326CE5" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg", color: "DC382D" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/rabbitmq.svg", color: "FF6600" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nginx.svg", color: "009639" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/linux.svg", color: "FCC624" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/githubactions.svg", color: "2088FF" }
    ]
  },
  {
    title: "Database",
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg", color: "4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg", color: "4169E1" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg", color: "47A248" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftsqlserver.svg", color: "CC292B" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sqlite.svg", color: "003B57" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg", color: "DC382D" },
      { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/elasticsearch.svg", color: "005571" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/oracle.svg", color: "F80000" },
      { name: "MariaDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mariadb.svg", color: "003545" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg", color: "FFCA28" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/supabase.svg", color: "3ECF8E" },
      { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazondynamodb.svg", color: "4053D6" },
      { name: "Power BI", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/powerbi.svg", color: "F2C811" },
      { name: "Azure SQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftazure.svg", color: "0078D4" },
      { name: "Cassandra", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachecassandra.svg", color: "1287B1" },
      { name: "PrismaORM", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/prisma.svg", color: "2D3748" }
    ]
  },
  {
    title: "Cloud",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazonwebservices.svg", color: "232F3E" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftazure.svg", color: "008AD7" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecloud.svg", color: "4285F4" },
      { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/digitalocean.svg", color: "0080FF" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg", color: "000000" },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/netlify.svg", color: "00C7B7" },
      { name: "Heroku", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/heroku.svg", color: "430098" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/cloudflare.svg", color: "F38020" },
      { name: "Amazon S3", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazons3.svg", color: "569A31" },
      { name: "Blob Storage", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftazure.svg", color: "0078D4" },
      { name: "Amazon SES", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazonwebservices.svg", color: "232F3E" },
      { name: "SendGrid", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/twilio.svg", color: "F22F46" },
      { name: "Mailchimp", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mailchimp.svg", color: "FFE01B" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg", color: "FFCA28" },
      { name: "DevOps", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/azuredevops.svg", color: "0078D7" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/terraform.svg", color: "844FBA" }
    ]
  },
  {
    title: "Mobile",
    techs: [
      { name: "iOS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/apple.svg", color: "000000" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/android.svg", color: "3DDC84" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", color: "61DAFB" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/flutter.svg", color: "02569B" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/swift.svg", color: "F05138" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/kotlin.svg", color: "7F52FF" },
      { name: "Ionic", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/ionic.svg", color: "3880FF" },
      { name: "Xamarin", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/xamarin.svg", color: "3498DB" }
    ]
  },
  {
    title: "UI / UX",
    techs: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg", color: "F24E1E" },
      { name: "Sketch", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sketch.svg", color: "F7B500" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobexd.svg", color: "FF61F6" },
      { name: "Miro", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/miro.svg", color: "050038" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/notion.svg", color: "000000" },
      { name: "Framer", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/framer.svg", color: "0055FF" },
      { name: "InVision", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/invision.svg", color: "FF3366" },
      { name: "Zeplin", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/zeplin.svg", color: "FDB92C" }
    ]
  },
  {
    title: "Graphic Design",
    techs: [
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobephotoshop.svg", color: "31A8FF" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeillustrator.svg", color: "FF9A00" },
      { name: "InDesign", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeindesign.svg", color: "FF3366" },
      { name: "After Effects", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeaftereffects.svg", color: "9999FF" },
      { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobepremierepro.svg", color: "9999FF" },
      { name: "Lightroom", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobelightroom.svg", color: "31A8FF" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/canva.svg", color: "00C4CC" },
      { name: "CorelDRAW", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/coreldraw.svg", color: "333333" }
    ]
  },
  {
    title: "AI",
    techs: [
      { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/openai.svg", color: "412991" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tensorflow.svg", color: "FF6F00" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/pytorch.svg", color: "EE4C2C" },
      { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/huggingface.svg", color: "FFD21E" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/keras.svg", color: "D00000" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/scikitlearn.svg", color: "F7931E" },
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/langchain.svg", color: "1C3C3C" },
      { name: "Midjourney", icon: "https://cdn.worldvectorlogo.com/logos/midjourney.svg", color: "000000" }
    ]
  }
];

const whyItems = [
  { num: "01", title: "Strategy before pixels.", desc: "Every project starts with understanding the problem. We design with purpose." },
  { num: "02", title: "Engineering without compromise.", desc: "Clean, scalable technology built for the long term — not the deadline." },
  { num: "03", title: "Designed for real users.", desc: "Beautiful interfaces backed by thoughtful UX research and clear hierarchy." },
  { num: "04", title: "Built to evolve.", desc: "Products designed to adapt and grow as your business scales and changes." },
];

const workItems = [
  { tags: ["E-Commerce", "Shopify"], name: "Orangebabe Kids Store", desc: "A vibrant Shopify-powered store driving 40% higher conversion for a children's apparel brand.", bg: "linear-gradient(135deg, #fff7f0 0%, #ffe8d6 100%)" },
  { tags: ["SaaS", "Node.js"], name: "Lumen CRM Platform", desc: "End-to-end CRM and analytics dashboard built for a fast-growing fintech startup.", bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)" },
  { tags: ["Brand", "Web"], name: "Lumen Brand Identity", desc: "Complete visual identity and marketing site for a Series A fintech company.", bg: "linear-gradient(135deg, #fff7f0 0%, #ff6a0015 100%)" },
  { tags: ["Mobile", "React Native"], name: "TrackR Field App", desc: "React Native workforce management app with real-time GPS and offline capabilities.", bg: "linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%)" },
];

const faqItems = [
  { q: "What type of projects do you work on?", a: "We work on digital product projects of all sizes — from startup MVPs to enterprise platforms. Our sweet spot is building things that are complex enough to be interesting and important enough to matter." },
  { q: "How long does a typical project take?", a: "It depends on scope. A focused website or MVP can be delivered in 6–10 weeks. A full SaaS platform or complex e-commerce build typically runs 3–6 months. We'll give you a clear timeline after the discovery phase." },
  { q: "Can you work with an existing application?", a: "Absolutely. We regularly step into existing codebases for audits, refactors, feature development, and performance optimisation. We're comfortable in messy environments." },
  { q: "Do you provide UI/UX design?", a: "Yes. Design is a core part of every project we take on. We don't separate design from development — the two disciplines work together from day one." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer retainer-based maintenance and support packages for all products we deliver. We also take on maintenance for projects we didn't build." },
  { q: "What technologies do you work with?", a: "We primarily build with React, Next.js, Node.js, Laravel, and PHP on the backend. For mobile, we use React Native and Flutter. For cloud, we deploy on AWS and Linux servers." },
  { q: "How do we start a project?", a: "Simple — reach out via the contact form or book a call. We'll have a short discovery conversation, understand your goals, and come back with a clear proposal and timeline." },
];

/* ─────────── COMPONENTS ─────────── */

// HeroSection replaced by InnerBanner

function OverviewSection() {
  const cards: { num: string; name: string; href: string; desc: string; icon: React.ReactNode; featured?: boolean; image?: string; imagePos?: 'left'|'right'|'top' }[] = [
    {
      num: "01", name: "Strategy & Consulting", href: "#strategy",
      desc: "Addressing your core brand strategy to connect directly with people. We dive deep into market research, user personas, and competitive analysis to build a strong foundation for scale.",
      image: "/assets/images/bento-strategy.jpg",
      imagePos: "left",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
    },
    {
      num: "02", name: "Brand Identity", href: "#brand",
      desc: "Positioning your brand to be exactly what people need it to be. We craft compelling visual systems, memorable logos, and strategic messaging frameworks that truly resonate with your target audience.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      num: "03", name: "UI / UX Design", href: "#design",
      desc: "Designing interfaces that perform, delight users, and drive conversions. Our approach blends aesthetic excellence with cognitive psychology to create seamless user journeys.",
      image: "/assets/images/bento-ui-ux.jpg",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
    },
    {
      num: "04", name: "Web Development", href: "#web-dev",
      desc: "Building fast, responsive websites and powerful web applications. We engineer secure, scalable, and high-performance digital platforms using modern tech stacks to drive your business forward.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
    },
    {
      num: "05", name: "Mobile App Development", href: "#mobile",
      desc: "Putting your business directly in their hands with engaging experiences. We build high-performance applications for iOS and Android using modern frameworks.",
      image: "/assets/images/bento-mobile.jpg",
      imagePos: "right",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
    },
    {
      num: "06", name: "E-Commerce Solutions", href: "#ecommerce",
      desc: "Creating digital experiences that stand out and capture your audience. We build high-conversion online stores with seamless payment integrations, intuitive product discovery, and robust inventory management.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
    },
    {
      num: "07", name: "AI & Custom Software", href: "#software",
      desc: "Driving your brand&apos;s sales directly to the market with built-to-convert solutions. We engineer robust software tailored exactly to your complex operational needs.",
      image: "/assets/images/bento-ai.jpg",
      imagePos: "left",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      num: "08", name: "Cloud & DevOps", href: "#cloud",
      desc: "Reliable infrastructure and deployment pipelines behind every product. We architect secure, highly available cloud environments and automated CI/CD workflows to ensure your applications run flawlessly at any scale.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.overview} id="services-overview">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.overviewHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowDot} />
              OUR SERVICES
            </span>
            <h2 className={styles.overviewHeadline}>
              Everything your product needs<span className={styles.overviewDot}>.</span>
            </h2>
          </div>
          <a href="/contact" className={styles.overviewCta}>
            EXPLORE WHAT WE DO →
          </a>
        </div>

        {/* 4-col card grid */}
        <div className={styles.servicesGrid}>
          {cards.map((s, idx) => {
            let bentoClass = styles.bentoNormal;
            if (idx === 0 || idx === 4 || idx === 6) bentoClass = styles.bentoWide;
            if (idx === 2) bentoClass = styles.bentoTall;

            // Scatter offsets for each card
            const scatter = [
              { rot: -1.2, tx: -3, ty: 2 },
              { rot: 0.8, tx: 2, ty: -3 },
              { rot: -0.6, tx: -1, ty: 4 },
              { rot: 1.4, tx: 3, ty: 1 },
              { rot: 0.9, tx: -2, ty: -2 },
              { rot: -1.1, tx: 4, ty: 3 },
              { rot: 0.5, tx: -3, ty: 1 },
              { rot: -1.5, tx: 2, ty: -4 },
            ];
            const sc = scatter[idx] || { rot: 0, tx: 0, ty: 0 };

            return (
              <TiltCard key={s.num} intensity={12} className={bentoClass}>
                <a href={s.href} className={`${styles.serviceCard} ${s.featured ? styles.serviceCardFeatured : ""} ${s.imagePos === 'left' ? styles.cardImgLeft : s.imagePos === 'right' ? styles.cardImgRight : ""}`} style={{ height: '100%', '--rot': `${sc.rot}deg`, '--tx': `${sc.tx}px`, '--ty': `${sc.ty}px` } as React.CSSProperties}>
                  {s.image && (
                    <div className={styles.serviceCardImage}>
                      <img src={s.image} alt={s.name} />
                    </div>
                  )}
                  <div className={styles.serviceCardContent}>
                    {/* Top row: icon + arrow */}
                    <div className={styles.serviceCardTop}>
                      <span className={styles.serviceCardIcon}>{s.icon}</span>
                      <span className={styles.serviceArrow}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </div>
                    <div className={styles.serviceName}>{s.name}</div>
                    <p className={styles.serviceDesc} dangerouslySetInnerHTML={{ __html: s.desc }} />
                  </div>
                </a>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function StrategySection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="strategy">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />01 / STRATEGY & CONSULTING</span>
            <h2 className={styles.serviceHeadline}>Vision. Planning. Scale<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Product Strategy", "Market Research", "Digital Transformation", "Business Analysis", "Go-To-Market", "Roadmapping"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Miro", "Notion", "Figma", "Maze"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹50,000 - ₹2,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 - 4 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/strategy_story.png" alt="strategy Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function BrandSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="brand">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />02 / BRAND IDENTITY</span>
            <h2 className={styles.serviceHeadline}>Identity. Voice. Presence<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Logo Design", "Brand Guidelines", "Typography & Color", "Messaging Framework", "Brand Strategy", "Visual Assets"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Illustrator", "Photoshop", "Figma", "After Effects"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹80,000 - ₹3,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>3 - 6 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/brand_story.png" alt="brand Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function WebDevSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="web-dev">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />04 / WEB DEVELOPMENT</span>
            <h2 className={styles.serviceHeadline}>Speed. Scale. Impact<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Corporate Websites", "Business Websites", "Web Applications", "CMS Development", "Custom Portals", "API Integration", "Performance Optimisation"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["React", "Next.js", "Node.js", "PHP", "Laravel"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹60,000 - ₹2,50,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>3 - 6 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/webdev_story.png" alt="web-dev Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function DesignSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgDarkOrange}`} id="design">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />03 / UI/UX & PRODUCT DESIGN</span>
            <h2 className={styles.serviceHeadline}>Aesthetic. Usability. Delight<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["UX Research", "Wireframing", "UI Design", "Design Systems", "Prototyping", "Interaction Design", "Website Redesign"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Figma", "Framer", "Sketch", "Principle"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹40,000 - ₹1,50,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 - 4 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/design_story.jpg" alt="design Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function EcommerceSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgDarkOrange}`} id="ecommerce">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />06 / E-COMMERCE</span>
            <h2 className={styles.serviceHeadline}>Conversion. Flow. Growth<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Shopify Development", "WooCommerce", "Custom E-Commerce", "Payment Integration", "Product Management", "API Integration", "E-Commerce Automation"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Shopify", "Stripe", "Next.js", "GraphQL"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹80,000 - ₹3,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>4 - 8 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/ecommerce_story.jpg" alt="ecommerce Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function SoftwareSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="software">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />07 / AI & CUSTOM SOFTWARE</span>
            <h2 className={styles.serviceHeadline}>Logic. Automation. Power<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["CRM", "ERP", "SaaS Platforms", "Business Dashboards", "Booking Systems", "Real-time Apps", "Business Automation", "API-driven Platforms"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["AWS", "Docker", "PostgreSQL", "TypeScript"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹2,50,000+</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>8 - 16 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/software_story.png" alt="software Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function MobileSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="mobile">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />05 / MOBILE APPLICATIONS</span>
            <h2 className={styles.serviceHeadline}>Native. Fluid. Engaging<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["React Native", "Flutter", "Android & iOS", "API Integration", "Push Notifications", "Real-time Features"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["React Native", "Flutter", "Firebase", "Swift"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹1,50,000 - ₹4,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>6 - 12 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/mobile_story.png" alt="mobile Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function CloudSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="cloud">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />08 / CLOUD & DEVOPS</span>
            <h2 className={styles.serviceHeadline}>Reliable. Secure. Scalable<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Cloud Deployment", "AWS", "Linux Server Management", "CI/CD", "SSL & Security", "Performance Optimisation", "Monitoring", "App Maintenance"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["AWS", "GitHub Actions", "Docker", "Linux"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>Custom</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>Ongoing</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>Start now <FiArrowRight style={{ marginLeft: '6px' }} /></Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/cloud_story.png" alt="cloud Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.processGlow} />
      <div className={styles.container}>
        <div className={styles.processHeader}>
          <span className={styles.sectionEyebrowDark}>HOW WE WORK</span>
          <h2 className={styles.processHeadline}>From first idea to a product people love to use.</h2>
        </div>
        <div className={styles.processSteps}>
          {processSteps.map((s) => (
            <div key={s.num} className={styles.processStep}>
              <span className={styles.processStepNum}>{s.num} — {s.title.toUpperCase()}</span>
              <h3 className={styles.processStepTitle}>{s.title}</h3>
              <p className={styles.processStepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const getTabIcon = (title: string) => {
  switch(title) {
    case "CMS & eCommerce": return <FiShoppingCart style={{ fontSize: '0.95rem' }} />;
    case "Frontend": return <FiMonitor style={{ fontSize: '0.95rem' }} />;
    case "Backend": return <FiServer style={{ fontSize: '0.95rem' }} />;
    case "Database": return <FiDatabase style={{ fontSize: '0.95rem' }} />;
    case "Cloud": return <FiCloud style={{ fontSize: '0.95rem' }} />;
    case "Mobile": return <FiSmartphone style={{ fontSize: '0.95rem' }} />;
    case "UI / UX": return <FiPenTool style={{ fontSize: '0.95rem' }} />;
    case "Graphic Design": return <FiImage style={{ fontSize: '0.95rem' }} />;
    case "AI": return <FiCpu style={{ fontSize: '0.95rem' }} />;
    default: return null;
  }
};

function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start auto-advance timer
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % techCategories.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    // Reset timer on manual click
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % techCategories.length);
    }, 5000);
  };

  return (
    <section className={styles.techStack} id="tech">
      <div className={styles.container}>
        <div className={styles.techHeader}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />TECH STACK</span>
            <h2 className={styles.techHeadline}>Technologies we master<span className={styles.overviewDot}>.</span></h2>
          </div>
          <div className={styles.techTabsContainer}>
          <div className={styles.techTabsHeader}>
            {techCategories.map((cat, idx) => (
              <button 
                key={cat.title} 
                className={`${styles.techTabBtn} ${activeTab === idx ? styles.techTabBtnActive : ''}`}
                onClick={() => handleTabClick(idx)}
              >
                {getTabIcon(cat.title)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
          
          <div key={activeTab} className={styles.techTabContent}>
            {techCategories[activeTab].techs.map(tech => (
              <div key={tech.name} className={styles.techCard}>
                <div className={styles.techCardIcon}>
                  <img 
                  src={tech.icon.startsWith('http') ? tech.icon : `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                  alt={tech.name} 
                  width="50" 
                  height="50" 
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    if (!e.currentTarget.src.includes('ui-avatars')) {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tech.name)}&background=f4f4f4&color=${tech.color}&font-size=0.4&rounded=true`;
                    }
                  }}
                />
                </div>
                <div className={styles.techCardFooter}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function WhyUsSection() {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className={styles.container}>
        <div className={styles.whyHeader}>
          <span className={styles.sectionEyebrow}>WHY US</span>
          <h2 className={styles.whyHeadline}>We don't just build websites. We build digital products with purpose.</h2>
        </div>
        <div className={styles.whyGrid}>
          {whyItems.map((item) => (
            <div key={item.num} className={styles.whyItem}>
              <span className={styles.whyNum}>{item.num}</span>
              <h3 className={styles.whyItemTitle}>{item.title}</h3>
              <p className={styles.whyItemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className={styles.work} id="selected-work">
      <div className={styles.container}>
        <div className={styles.workHeader}>
          <span className={styles.sectionEyebrow}>SELECTED WORK</span>
          <h2 className={styles.workHeadline}>A few things we&apos;ve built.</h2>
        </div>
        <div className={styles.workGrid}>
          {workItems.map((w) => (
            <TiltCard key={w.name} intensity={8}>
              <div className={styles.workCard} style={{ height: '100%' }}>
                <div className={styles.workCardImg}>
                  <div className={styles.workImgFallback} style={{ background: w.bg }} />
                </div>
                <div className={styles.workCardMeta}>
                  <div className={styles.workCardTags}>
                    {w.tags.map(t => <span key={t} className={styles.workCardTag}>{t}</span>)}
                  </div>
                  <h3 className={styles.workCardName}>{w.name}</h3>
                  <p className={styles.workCardDesc}>{w.desc}</p>
                  <Link href="/portfolio" className={styles.workCardLink}>
                    View Case Study →
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>QUESTIONS</span>
            <h2 className={styles.faqHeadline}>Things you might want to know.</h2>
            <p className={styles.faqLeftSub}>
              Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ul className={styles.faqList}>
            {faqItems.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <li key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>+</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <p className={styles.faqAnswerInner}>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────── MAIN EXPORT ─────────── */
export default function ServicesPage() {
  return (
    <>
      <InnerBanner
        title="We Build. We Design. We Deliver."
        description="Web development, UI/UX design, e-commerce, custom software, mobile apps & cloud — end-to-end digital services for ambitious businesses."
        bgImage="/assets/images/office.jpg"
      />
      <OverviewSection />
      <StrategySection />
      <BrandSection />
      <DesignSection />
      <WebDevSection />
      <MobileSection />
      <EcommerceSection />
      <SoftwareSection />
      <CloudSection />
      <ProcessSection />
      <TechStackSection />
      <FinalCta />
    </>
  );
}

// force reload
// re-fetch
