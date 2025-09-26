import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Grid } from "@/components/ui/grid";
import { Stack } from "@/components/ui/stack";
import { Container } from "@/components/ui/container";

export default function StyleGuidePage() {
  return (
    <Container className="py-12">
      <Stack gap={8}>
        {/* Header */}
        <div className="text-center">
          <Typography variant="h1" className="mb-4">Design System Style Guide</Typography>
          <Typography variant="lead">
            A comprehensive showcase of CodeStorm Hub&apos;s design system components and patterns.
          </Typography>
        </div>

        {/* Typography Section */}
        <section>
          <Typography variant="h2" className="mb-8">Typography</Typography>
          <Card className="p-8">
            <Stack gap={6}>
              <Typography variant="h1">Heading 1 - Main page titles</Typography>
              <Typography variant="h2">Heading 2 - Section titles</Typography>
              <Typography variant="h3">Heading 3 - Subsection titles</Typography>
              <Typography variant="h4">Heading 4 - Content titles</Typography>
              <Typography variant="h5">Heading 5 - Small titles</Typography>
              <Typography variant="h6">Heading 6 - Smallest titles</Typography>
              <Typography variant="lead">
                Lead paragraph - Important introductory text that provides context and draws attention.
              </Typography>
              <Typography variant="body">
                Body text - The main content text used throughout the application. It should be readable and comfortable to read in long passages.
              </Typography>
              <Typography variant="large">Large text - Emphasized body text for important content.</Typography>
              <Typography variant="small">Small text - Used for captions and fine print.</Typography>
              <Typography variant="muted">Muted text - Less important information and metadata.</Typography>
            </Stack>
          </Card>
        </section>

        {/* Colors Section */}
        <section>
          <Typography variant="h2" className="mb-8">Colors</Typography>
          <Grid cols={4} gap={6}>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-primary rounded-lg"></div>
                <div>
                  <Typography variant="h6">Primary</Typography>
                  <Typography variant="small" className="font-mono">var(--primary)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-secondary rounded-lg"></div>
                <div>
                  <Typography variant="h6">Secondary</Typography>
                  <Typography variant="small" className="font-mono">var(--secondary)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-muted rounded-lg"></div>
                <div>
                  <Typography variant="h6">Muted</Typography>
                  <Typography variant="small" className="font-mono">var(--muted)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-accent rounded-lg"></div>
                <div>
                  <Typography variant="h6">Accent</Typography>
                  <Typography variant="small" className="font-mono">var(--accent)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-destructive rounded-lg"></div>
                <div>
                  <Typography variant="h6">Destructive</Typography>
                  <Typography variant="small" className="font-mono">var(--destructive)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-success rounded-lg"></div>
                <div>
                  <Typography variant="h6">Success</Typography>
                  <Typography variant="small" className="font-mono">var(--success)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-warning rounded-lg"></div>
                <div>
                  <Typography variant="h6">Warning</Typography>
                  <Typography variant="small" className="font-mono">var(--warning)</Typography>
                </div>
              </Stack>
            </Card>
            <Card className="p-6">
              <Stack gap={4}>
                <div className="w-full h-16 bg-border rounded-lg border-2 border-foreground/20"></div>
                <div>
                  <Typography variant="h6">Border</Typography>
                  <Typography variant="small" className="font-mono">var(--border)</Typography>
                </div>
              </Stack>
            </Card>
          </Grid>
        </section>

        {/* Buttons Section */}
        <section>
          <Typography variant="h2" className="mb-8">Buttons</Typography>
          <Card className="p-8">
            <Stack gap={8}>
              <div>
                <Typography variant="h4" className="mb-4">Variants</Typography>
                <Stack direction="row" gap={4} wrap>
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                </Stack>
              </div>
              
              <div>
                <Typography variant="h4" className="mb-4">Sizes</Typography>
                <Stack direction="row" gap={4} align="center" wrap>
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </Stack>
              </div>
              
              <div>
                <Typography variant="h4" className="mb-4">Icon Buttons</Typography>
                <Stack direction="row" gap={4} align="center" wrap>
                  <Button size="icon-sm" variant="outline">S</Button>
                  <Button size="icon" variant="outline">M</Button>
                  <Button size="icon-lg" variant="outline">L</Button>
                </Stack>
              </div>
            </Stack>
          </Card>
        </section>

        {/* Layout Components */}
        <section>
          <Typography variant="h2" className="mb-8">Layout Components</Typography>
          <Stack gap={8}>
            <div>
              <Typography variant="h4" className="mb-4">Grid System</Typography>
              <Card className="p-6">
                <Stack gap={6}>
                  <div>
                    <Typography variant="h6" className="mb-2">3 Column Grid</Typography>
                    <Grid cols={3} gap={4}>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 1</div>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 2</div>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 3</div>
                    </Grid>
                  </div>
                  
                  <div>
                    <Typography variant="h6" className="mb-2">4 Column Grid</Typography>
                    <Grid cols={4} gap={4}>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 1</div>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 2</div>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 3</div>
                      <div className="bg-muted p-4 rounded-lg text-center">Item 4</div>
                    </Grid>
                  </div>
                </Stack>
              </Card>
            </div>
            
            <div>
              <Typography variant="h4" className="mb-4">Stack Component</Typography>
              <Card className="p-6">
                <Stack gap={6}>
                  <div>
                    <Typography variant="h6" className="mb-2">Vertical Stack</Typography>
                    <Stack gap={3}>
                      <div className="bg-muted p-3 rounded text-center">Item 1</div>
                      <div className="bg-muted p-3 rounded text-center">Item 2</div>
                      <div className="bg-muted p-3 rounded text-center">Item 3</div>
                    </Stack>
                  </div>
                  
                  <div>
                    <Typography variant="h6" className="mb-2">Horizontal Stack</Typography>
                    <Stack direction="row" gap={3}>
                      <div className="bg-muted p-3 rounded text-center flex-1">Item 1</div>
                      <div className="bg-muted p-3 rounded text-center flex-1">Item 2</div>
                      <div className="bg-muted p-3 rounded text-center flex-1">Item 3</div>
                    </Stack>
                  </div>
                </Stack>
              </Card>
            </div>
          </Stack>
        </section>

        {/* Spacing Scale */}
        <section>
          <Typography variant="h2" className="mb-8">Spacing Scale</Typography>
          <Card className="p-8">
            <Stack gap={4}>
              <Typography variant="body" className="mb-4">
                Our spacing system is based on an 8px grid system for consistent and harmonious layouts.
              </Typography>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((space) => (
                  <div key={space} className="flex items-center gap-4">
                    <Typography variant="small" className="font-mono w-20">
                      --space-{space}
                    </Typography>
                    <div 
                      className="bg-primary rounded"
                      style={{ 
                        width: `${space * 4}px`, 
                        height: '16px' 
                      }}
                    />
                    <Typography variant="small" className="text-muted-foreground">
                      {space * 4}px
                    </Typography>
                  </div>
                ))}
              </div>
            </Stack>
          </Card>
        </section>
      </Stack>
    </Container>
  );
}