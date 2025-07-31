import promptUser from "../assets/prompt-user.png";
import rendering from "../assets/rendering.png";
import editing from "../assets/editing.png";
import codeGen from "../assets/code-gen.png";
import teamCollab from "../assets/team-collab.png";
import sharing from "../assets/sharing.png";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

import {
  RiScissorsFill,
  RiLayout4Fill,
  RiCloudFill,
  RiBrainFill,
  RiTeamFill,
  RiDownload2Fill,
} from "@remixicon/react";

export const HERO_CONTENT = {
  updates: "🚀 New Feature: 4K exports & API access on Pro plans!",
  mainHeading: "Transform Words Into Motion. \n No Code, Just Creativity.",
  subHeading:
    "Animathic is an AI-powered animation platform that turns simple text prompts into stunning, high-quality 2D animations videos, perfect for educators, creators, and visual thinkers.",
  actions: {
    primary: "Start Free Trial",
    secondary: "Watch Demo",
  },
  trustedByText: "Trusted by Leading Creators & Students.",
};

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "How it works",
  sectionDescription:
    "From idea to polished video, Animathic handles everything. Scripting, editing, and collaboration, so you can focus on creating.",
  steps: [
    {
      title: "Describe Your Concept",
      description:
        "Write a prompt like: “Visualize a sine wave growing inside a coordinate plane with labeled axes.” Animathic’s AI understands your intent and gets to work.",
      imageSrc: promptUser,
      imageAlt: "Streaming Setup",
    },
    {
      title: "AI Generates Scripts In the Backend",
      description:
        "Just sit back and relax. Animathic translates your prompt into clean, optimized Python code — no coding knowledge required.",
      imageSrc: codeGen,
      imageAlt: "Audience Engagement",
    },
    {
      title: "Render in the Cloud",
      description:
        "Your animation is rendered on our high-performance servers with beautiful precision — no local installation or processing power needed.",
      imageSrc: rendering,
      imageAlt: "Performance Analytics",
    },
    {
      title: "Edit with the Built-in AI Video Assistant",
      description:
        "Use our lightweight, browser-based video editor to trim scenes, overlay audio, adjust timing, or tweak labels — with AI-powered suggestions to enhance clarity and flow.",
      imageSrc: editing,
      imageAlt: "Optimize Settings",
    },
    {
      title: "Collaborate with Your Team",
      description:
        "Organize animations into shared workspaces and collaborate in real-time. Perfect for educators, content teams, and academic groups.",
      imageSrc: teamCollab,
      imageAlt: "Monetization",
    },
    {
      title: "Download or Share Anywhere",
      description:
        "Export your animation in HD or 4K, download the video, or share a live preview link — ready for classrooms, YouTube, or course platforms.",
      imageSrc: sharing,
      imageAlt: "Workflow Automation",
    },
  ],
};

export const HIGHLIGHTS_CONTENT = {
  sectionTitle: "What You Get",
  sectionDescription:
    "From AI scripting to team collaboration, Animathic is your all-in-one toolkit for visualizing ideas with precision and ease",
  features: [
    {
      id: 1,
      icon: <RiBrainFill className="w-8 h-8" />,
      title: "Prompt-to-Animation AI",
      description:
        "Describe your animation in plain English. Our AI handles the scriptwriting, animation logic, and code structure.",
    },
    {
      id: 2,
      icon: <RiCloudFill className="w-8 h-8" />,
      title: "Cloud-Based Rendering",
      description:
        "Render animations in the cloud with full HD or 4K support. No local setup. No dependencies. Just prompt and go.",
    },
    {
      id: 3,
      icon: <RiScissorsFill className="w-8 h-8" />,
      title: "AI-Assisted Video Editor",
      description:
        "Fine-tune animations with a smart, browser-based editor. Trim scenes, add labels, or sync voiceovers effortlessly.",
    },
    {
      id: 4,
      icon: <RiTeamFill className="w-8 h-8" />,
      title: "Team Collaboration via Groups",
      description:
        "Create shared workspaces and collaborate with teammates or students on animations in real-time.",
    },
    {
      id: 5,
      icon: <RiDownload2Fill className="w-8 h-8" />,
      title: "HD & 4K Exports + Embeds",
      description:
        "Export videos or generate embed links for websites, LMS platforms, or presentations.",
    },
    {
      id: 6,
      icon: <RiLayout4Fill className="w-8 h-8" />,
      title: "Template Library",
      description:
        "Access prebuilt templates for graphs, equations, transformations, and geometric scenes.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Whether you're just getting started or producing animations at scale, Animathic has a plan that fits your workflow.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$1.99/month",
      description:
        "Get started with essential features. Ideal for hobbyists, students, or anyone testing the waters.",
      features: [
        "Up to 6 animations/month",
        "720p video resolution",
        "Access to template library",
        "Limited cloud rendering queue",
        "Animathic watermark",
      ],
    },
    {
      name: "Creator",
      price: "$11.99/month",
      description:
        "Perfect for educators, tutors, and content creators who need quality, speed, and control.",
      features: [
        "Up to 60 animations/month",
        "1080p HD output & Priority rendering",
        "No watermark",
        "Custom audio upload",
        "AI-assisted video editor (Lite)",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$29.99/month",
      description:
        "Built for power users and collaborative teams. Everything you need to scale your animation workflow.",
      features: [
        "Unlimited animations",
        "4K exports",
        "Team collaboration via groups",
        "AI-assisted video editor (Pro)",
        "API Access (coming soon)",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "Hear from Our Users",
  sectionDescription:
    "Real stories from educators, creators, and teams using Animathic to bring their ideas to life.",
  reviews: [
    {
      name: "Grant Sanderson",
      title: "Youtuber, 3Blue1Brown",
      review:
        "As someone who creates math explainer videos, Animathic saves me hours. No more tweaking my code. it's just creativity and storytelling. I just prompt what I need, and it delivers polished, smooth animations ready to drop into my content.",
      image: user1,
    },
    {
      name: "Ava Green",
      title: "Math Professor",
      review:
        "Animathic makes visualizing complex math concepts incredibly simple. I just describe the scene, and the animation appears like magic. It's transformed how I teach equations and theorems, my students are more engaged than ever!",
      image: user2,
    },
    {
      name: "Mathiyas Huysma",
      title: "Student",
      review:
        "I used Animathic for my final year project to demonstrate theorems visually. It made my presentation stand out and helped me explain things more clearly. The ability to edit and render online is incredibly convenient. It's the perfect tool for visual learners like me.",
      image: user3,
    },
    {
      name: "Juan Encalada",
      title: "Online Course Instructor",
      review:
        "Creating animations used to be the most time-consuming part of my workflow. Animathic changed that. It's like having an AI co-creator that helps me bring my lessons to life with professional quality visuals.",
      image: user4,
    },
    {
      name: "Gary Vitaly",
      title: "Team Lead at EdTech Startup",
      review:
        "Our team uses Animathic to quickly prototype and share educational animations. The group workspace and collaboration tools are super useful. It's a powerful addition to our content creation pipeline and saves a lot of dev time.",
      image: user5,
    },
    {
      name: "Clarisse Meyer",
      title: "Independent Creator",
      review:
        "I love how intuitive Animathic is. I’m not a coder, but I can still generate animations just by describing what I want. The templates are a huge bonus, especially when I need to work fast.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "PRODUCT",
      links: [
        { text: "How It Works", url: "#works" },
        { text: "Features", url: "#features" },
        { text: "Templates", url: "/templates" },
        { text: "Pricing", url: "#pricing" },
        { text: "Try for Free", url: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Blog", url: "/blog" },
        { text: "Changelog", url: "/changelog" },
        { text: "Careers", url: "/careers" },
        { text: "Media Kit", url: "/media-kit" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Help Center", url: "/help" },
        { text: "Contact Us", url: "/contact" },
        { text: "FAQs", url: "/faq" },
        { text: "Community", url: "/community" },
        { text: "Feedback", url: "/feedback" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "Discord", url: "#" },
        { text: "GitHub", url: "#" },
      ],
    },
  ],
  platformsText: "Available on Web | No Downloads Required | Powered by Manim",
  copyrightText: "© 2025 Animathic, Inc. All rights reserved.",
};
