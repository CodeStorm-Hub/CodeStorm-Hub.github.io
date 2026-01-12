"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLinkIcon, RocketIcon } from "@radix-ui/react-icons"

// Product data interface - easily extensible for more products
interface Product {
  id: string
  name: string
  tagline: string
  shortDescription: string
  fullDescription: string
  features: string[]
  productUrl: string
  dashboardImage: string
  status: "active" | "coming-soon" | "beta"
  category: string
}

// Products data - add more products here as they are developed
const products: Product[] = [
  {
    id: "stormcom",
    name: "StormCom",
    tagline: "AI-Powered E-commerce Platform",
    shortDescription: "A comprehensive AI-based SaaS solution designed to empower e-commerce vendors of all sizes with intelligent analytics, automated operations, and data-driven insights.",
    fullDescription: `StormCom is a next-generation AI-powered e-commerce management platform built for modern online businesses. Whether you're a small boutique store or a large-scale enterprise, StormCom provides the tools you need to streamline operations, boost sales, and make smarter business decisions.

Our platform leverages cutting-edge artificial intelligence to analyze your store's performance, predict trends, and automate repetitive tasks—giving you more time to focus on what matters most: growing your business.

With real-time dashboards, intelligent reporting, and seamless integrations, StormCom transforms the way you manage your online store.`,
    features: [
      "Real-time Revenue & Order Analytics",
      "AI-Powered Sales Predictions",
      "Smart Inventory Management",
      "Customer Behavior Insights",
      "Multi-Store Management",
      "Automated Marketing Campaigns",
      "Advanced Reporting & Data Export",
      "Team Collaboration Tools",
      "Secure Document Management",
      "24/7 Performance Monitoring"
    ],
    productUrl: "https://codestormhub.live",
    dashboardImage: "/products/stormcom-dashboard.png",
    status: "active",
    category: "E-commerce"
  },
  // Add more products here as they are developed
  // {
  //   id: "another-product",
  //   name: "Product Name",
  //   ...
  // }
]

interface ProductsSectionProps {
  className?: string
}

export default function ProductsSection({ className }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className={className} aria-labelledby="products-heading">
      <Container className="py-16 sm:py-24">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <RocketIcon className="h-4 w-4" />
              Our Products
            </div>
            <Typography variant="h2" id="products-heading">
              Products We&apos;ve Built
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              Discover our suite of AI-powered products designed to solve real-world business challenges and drive growth
            </Typography>
          </Stack>

          {/* Products Grid */}
          <Grid cols={2} gap={8} className="w-full">
            {products.map((product) => (
              <Dialog key={product.id}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50">
                  {/* Product Preview Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <RocketIcon className="h-8 w-8 text-primary" />
                        </div>
                        <span className="text-xl font-bold text-foreground">{product.name}</span>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        product.status === "active" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                          : product.status === "beta"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {product.status === "active" ? "● Live" : product.status === "beta" ? "● Beta" : "Coming Soon"}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <Stack gap={2}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                          {product.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-primary">{product.tagline}</span>
                    </Stack>
                  </CardHeader>

                  <CardContent>
                    <Stack gap={4}>
                      <CardDescription className="line-clamp-2">
                        {product.shortDescription}
                      </CardDescription>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => setSelectedProduct(product)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <Button size="sm" className="flex-1" asChild>
                          <a 
                            href={product.productUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLinkIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            Visit
                          </a>
                        </Button>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Product Detail Modal */}
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <RocketIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                        <DialogDescription className="text-primary font-medium">
                          {product.tagline}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6 py-4">
                    {/* Dashboard Screenshot */}
                    <div className="relative rounded-lg overflow-hidden border bg-muted">
                      <Image
                        src={product.dashboardImage}
                        alt={`${product.name} Dashboard`}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">About {product.name}</h4>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {product.fullDescription}
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center pt-4">
                      <Button size="lg" asChild>
                        <a 
                          href={product.productUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Explore {product.name}
                        </a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </Grid>
        </Stack>
      </Container>
    </section>
  )
}

export type { ProductsSectionProps, Product }
