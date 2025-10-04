"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#solutions" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const solutionCards = [
  {
    title: "Installation & Repair",
    description: "Fast turnarounds for residential and commercial roofs.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Emergency Response",
    description: "24/7 crews ready to keep water and storm damage at bay.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maintenance Programs",
    description: "Proactive inspections extend the life of every shingle.",
    image:
      "https://images.unsplash.com/photo-1597004898526-0d74a5b37b7d?auto=format&fit=crop&w=800&q=80",
  },
];

const stats = [
  {
    value: "50+",
    label: "Expert roofers on staff",
  },
  {
    value: "2M",
    label: "Square feet protected",
  },
  {
    value: "85%",
    label: "Projects from referrals",
  },
];

const testimonials = [
  {
    name: "Jamie Patel",
    role: "Facilities Director, Northwind Inc.",
    quote:
      "They handled our multi-building retrofit with zero disruption to operations.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Carlos Ramirez",
    role: "Owner, CR Developments",
    quote:
      "Reliable, transparent, and always ahead of schedule—exactly what we need in a partner.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Erica Wong",
    role: "Community Manager, Brightside Homes",
    quote:
      "Our residents rave about the craftsmanship. The new roofs look incredible.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function StarRating({ value }: { value: number }) {
  return (
    <motion.div
      className="flex items-center gap-1 text-yellow-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
        >
          <Star
            size={16}
            fill={index + 1 <= Math.round(value) ? "currentColor" : "none"}
            strokeWidth={index + 1 <= Math.round(value) ? 0 : 1.5}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-slate-100"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sky-200/70 via-slate-100 to-transparent" />
      <motion.header
        className="border-b border-slate-200 bg-white/90 backdrop-blur"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#" className="flex items-center gap-3 text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
              B
            </span>
            <span className="text-lg font-semibold">&amp; Bldr</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative transition-colors hover:text-slate-900 ${
                  link.label === "Contact"
                    ? "text-slate-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-sky-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            size="sm"
            className="hidden items-center gap-2 rounded-full px-5 text-sm font-semibold md:inline-flex"
          >
            <Phone className="size-4" />
            Call us
          </Button>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16">
        <motion.section
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-10 text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Badge variant="secondary" className="bg-white/20 px-3 py-1 text-white">
                  Roofing done right
                </Badge>
              </motion.div>
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[52px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Building Strong Roofs, Building Trust*
                </motion.h1>
                <motion.p
                  className="max-w-xl text-base text-sky-100 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Resilient roofing solutions built to withstand every season—keeping your home safe, secure, and stylish for decades.
                </motion.p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button size="lg" className="rounded-full px-8 text-sm font-semibold">
                    Get a free quote
                  </Button>
                </motion.div>
                <div className="flex items-center gap-3 text-sm text-sky-100">
                  <StarRating value={4.9} />
                  <div>
                    <p className="font-medium text-white">125 recent reviews</p>
                    <p className="text-xs text-sky-100/80">
                      Trusted by homeowners, HOAs, and developers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[380px]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1570126686778-16ba7c999fe5?auto=format&fit=crop&w=1200&q=80"
                  alt="Newly installed green roof"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Card className="absolute right-6 top-8 w-64 border-white/40 bg-white/80 p-0 text-slate-900 backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Roof Installation</CardTitle>
                  <CardDescription className="text-sm">
                    Starting at <span className="font-semibold text-slate-900">$50,000</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <StarRating value={4.8} />
                    <span>4.8 • 212 jobs</span>
                  </div>
                  <Button size="sm" className="w-full">
                    View project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="grid gap-12 rounded-3xl bg-white p-10 shadow-sm md:grid-cols-[1.1fr_0.9fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-sky-100 text-slate-900">
              Trusted Experts
            </Badge>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Trusted Roofing Experts for Over 20 Years
              </h2>
              <p className="text-base text-slate-600">
                From consultation to installation, our dedicated team guides you every step of the way. We pair premium materials with meticulous craftsmanship to deliver roofs that last.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <StarRating value={4.5} />
                <span>
                  <span className="font-semibold text-slate-900">4.5</span> • 125 ratings
                </span>
              </div>
              <Separator orientation="vertical" className="hidden h-8 md:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-500" />
                Licensed, bonded &amp; insured crews
              </div>
            </div>
            <Button
              variant="outline"
              className="w-fit rounded-full border-slate-300 px-6 text-sm font-semibold"
            >
              Our work
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border-slate-200">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
                  alt="Roof with dormer windows"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4 text-sm text-slate-600">
                High-end finish work for modern and heritage homes alike.
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between overflow-hidden border-slate-200 bg-slate-50">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  alt="Architectural illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4 text-sm text-slate-600">
                Collaborative planning with architects, GCs, and HOA boards.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="solutions"
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="bg-sky-100 text-slate-900">
              Comprehensive Roofing Solutions
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Services tailored to every roofline
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Whether it is a single-family home or a large community development, we deliver engineered solutions that protect investments and boost curb appeal.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {solutionCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                  },
                  hover: {
                    y: -8,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }
                }}
                whileHover="hover"
                className="h-full"
              >
                <Card className="overflow-hidden border-slate-200 h-full">
                <div className="relative h-56">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow">
                    →
                  </span>
                </div>
                <CardHeader className="gap-3 pb-4">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="bg-sky-100 text-slate-900">
              Latest Insights
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Roofing Tips & Industry Updates
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Expert advice, maintenance guides, and industry insights to help you make informed decisions about your roofing needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Winter Roof Maintenance Guide",
                description: "Essential tips to protect your roof during harsh winter conditions and prevent costly damage.",
                image: "https://images.unsplash.com/photo-1570126686778-16ba7c999fe5?auto=format&fit=crop&w=800&q=80",
                date: "Dec 15, 2024",
                readTime: "5 min read"
              },
              {
                title: "Choosing the Right Roofing Material",
                description: "A comprehensive comparison of asphalt, metal, and tile roofing options for your home.",
                image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
                date: "Nov 28, 2024",
                readTime: "8 min read"
              },
              {
                title: "Signs You Need Roof Replacement",
                description: "Don't wait for a leak! Learn the early warning signs that indicate it's time for a new roof.",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                date: "Nov 12, 2024",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-full"
              >
                <Card className="overflow-hidden border-slate-200 group hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardHeader className="gap-3 pb-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" className="w-full justify-between text-sky-600 hover:text-sky-700 p-0">
                    Read more
                    <ArrowRight className="size-4" />
                  </Button>
                 </CardContent>
               </Card>
               </motion.div>
             ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="rounded-full border-slate-300 px-8 text-sm font-semibold">
              View all posts
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="grid gap-6 rounded-3xl bg-white p-10 shadow-sm sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <Card key={stat.value} className="border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-slate-900">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  {stat.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.section>

        <motion.section
          className="grid gap-10 rounded-3xl bg-white p-10 shadow-sm lg:grid-cols-[1.1fr_0.9fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-sky-100 text-slate-900">
              Keeping Roofs Strong
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Keeping Roofs Strong for Generations
            </h2>
            <p className="text-base text-slate-600">
              Families count on us to deliver roofs that stand the test of time. Our preventative maintenance plans ensure your investment is protected year after year.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Annual inspections with thermal imaging reports",
                "Dedicated project manager for every install",
                "Financing options that fit your budget",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 text-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            <div className="relative h-56 overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1100&q=80"
                alt="Family outside their home"
                fill
                className="object-cover"
              />
            </div>
            <Card className="flex items-center gap-4 border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <Image
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=400&q=80"
                  alt="Helping hands"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  10-year craftsmanship warranty
                </p>
                <p className="text-sm text-slate-600">
                  Backed by responsive service and dedicated support teams.
                </p>
              </div>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="bg-sky-100 text-slate-900">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Loved by Businesses, Trusted by Professionals
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full border-slate-200 bg-white">
                <CardContent className="space-y-5 pt-6">
                  <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="relative overflow-hidden rounded-3xl bg-sky-100 p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/60 blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Need a New Roof or Quick Repair?
              </h2>
              <p className="text-base text-slate-600">
                Tell us about your project and a project specialist will reach out within one business day.
              </p>
              <div className="inline-flex rounded-full bg-white px-6 py-4 shadow-lg">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Need a new roof?</p>
                  <p className="text-xs text-slate-500">We are ready when you are.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
              <Button size="lg" className="rounded-full px-8 text-sm font-semibold">
                Get a quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-slate-300 px-8 text-sm font-semibold"
              >
                Explore services
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Top-Notch Roofing, Lasting Results*
              </h3>
              <p className="max-w-xl text-sm text-slate-300">
                Premium materials, precise installation, and proactive care—that is how we protect what matters most.
              </p>
            </div>
            <Button className="rounded-full bg-white px-6 text-sm font-semibold text-slate-900">
              Schedule inspection
            </Button>
          </div>
          <Separator className="border-slate-800" />
          <div className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Top-Notch Roofing. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}