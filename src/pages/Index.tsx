import { HeartHandshake, GraduationCap, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-emilia.jpg";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountUpNumber from "@/components/CountUpNumber";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>

      <header>
        <Navbar />
      </header>

      <main id="content">
        {/* Hero */}

        <section aria-label="Hero" className="relative">
          <img
            src={heroImage}
            alt="Hands nurturing a young plant symbolizing hope and growth"
            className="h-[70vh] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/10" />
          <div className="container absolute inset-0 flex items-center">
            <div className="max-w-2xl animate-enter">
              <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                Emilia Burton Trust — Empowering Women and Children
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We enable vulnerable communities to thrive through education,
                healthcare and small-business support.
              </p>
              <div className="flex gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#donate">Donate Now</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <AnimatedSection>
        <section id="about" className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in memory of Late Mrs. Maria Emilia Burton, we are committed to reaching those in need—especially women and children. We believe that education, quality healthcare, and sustainable livelihoods are the strongest pathways to breaking the cycle of poverty and injustice.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <GraduationCap className="h-5 w-5 text-primary" /> Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Providing scholarships, school kits, and mentorship to empower children with a brighter future.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="h-5 w-5 text-primary" /> Women
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                 Offering up-skilling opportunities, access to healthcare especially mental health, and dignity-driven support to help women thrive.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Store className="h-5 w-5 text-primary" /> Small Business
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Enabling micro-entrepreneurs through seed funding and hands-on coaching, fostering self-reliance and growth.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
</AnimatedSection>
        {/* Projects */}
        <AnimatedSection>
        <section id="projects" className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-3xl mb-8">Our Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                title: 'Children',
                icon: GraduationCap,
                desc: 'Educating a child transforms a whole community.'
              }, {
                title: 'Women',
                icon: Users,
                desc: 'Training and healthcare for dignity and security.'
              }, {
                title: 'Small Business',
                icon: Store,
                desc: 'Micro‑loans and coaching for sustainable income.'
              }].map((p) => (
                <Card key={p.title} className="hover:shadow-lg transition-all hover:translate-y-[-2px]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <p.icon className="h-5 w-5 text-primary" /> {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {p.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        </AnimatedSection>

        {/* Impact */}
{/* <AnimatedSection>
  <section id="impact" className="container py-16 md:py-24">
    <h2 className="font-display text-3xl mb-8">Impact so far</h2>
    <div className="grid sm:grid-cols-3 gap-6">
      {[
        { k: "Children Supported", v: 1200 },
        { k: "Women Up-skilled", v: 800 },
        { k: "Small Businesses", v: 150 },
      ].map((s) => (
        <Card key={s.k} className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-primary">
              <CountUpNumber end={s.v} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{s.k}</CardContent>
        </Card>
      ))}
    </div>
  </section>
</AnimatedSection> */}


        {/* Donate CTA */}
        <AnimatedSection>
        <section id="donate" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-t">
          <div className="container text-center">
            <h2 className="font-display text-3xl mb-4">Your support changes lives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Join us in creating opportunities for women and children to
              flourish. Every contribution counts.
            </p>
            <Button variant="hero" size="lg">
              Donate to Emilia Burton Trust
            </Button>
          </div>
        </section>
        </AnimatedSection>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
