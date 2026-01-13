"use client"

import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Stack } from "@/components/ui/stack"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: "wanderlust",
    title: "Wanderlust Travel",
    description: "Explore breathtaking destinations, create unforgettable memories, and experience the world like never before with our curated travel platform.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    category: "Travel & Tourism"
  },
  {
    id: "lens-artistry",
    title: "Lens & Light Photography",
    description: "Capturing moments, creating memories. Professional photography services with timeless elegance and artistic vision for weddings, portraits, and events.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    category: "Photography"
  },
  {
    id: "aura-style",
    title: "LUXE Fashion Store",
    description: "Discover contemporary fashion pieces crafted for the modern wardrobe. Timeless design meets modern craftsmanship with ethically produced elegance.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    category: "Fashion E-commerce"
  },
  {
    id: "luxe-abode",
    title: "Luxe Properties",
    description: "Your premier destination for luxury real estate. Experience luxury living with our curated collection of premium properties where elegance meets comfort.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Real Estate"
  },
  {
    id: "bloom-shop",
    title: "ShopHub Premium Store",
    description: "Elevate your everyday style with premium products curated for the modern lifestyle. Quality, elegance, and innovation in every detail.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    category: "E-commerce"
  },
  {
    id: "ethereal-store",
    title: "ModernShop Storefront",
    description: "Shop the latest trends with unbeatable prices. Quality products delivered to your doorstep with free shipping, secure payment, and easy returns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "E-commerce"
  }
]

interface OurProjectsSectionProps {
  className?: string
}

export default function OurProjectsSection({ className }: OurProjectsSectionProps) {
  return (
    <section 
      className={`relative bg-gradient-to-br from-[#1a1035] via-[#2d1f5c] to-[#1a1035] py-16 sm:py-24 ${className || ""}`}
      aria-labelledby="our-projects-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(147, 51, 234, 0.1) 10px,
              rgba(147, 51, 234, 0.1) 20px
            )`
          }}
        />
      </div>

      <Container className="relative z-10">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center mb-4">
            <Typography variant="h2" id="our-projects-heading" className="text-white">
              Our Projects
            </Typography>
            <Typography variant="lead" className="max-w-2xl text-gray-300">
              Showcasing innovative web solutions that transform ideas into exceptional digital experiences
            </Typography>
          </Stack>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Stack>
      </Container>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#1e1245] border border-purple-900/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1245] via-[#1e1245]/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-purple-600/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
            {project.category}
          </span>
        </div>

        {/* Browser Frame Decoration */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/50 transition-colors pointer-events-none" />
    </div>
  )
}

export type { OurProjectsSectionProps, Project }
