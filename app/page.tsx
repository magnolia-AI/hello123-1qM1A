'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Zap, Shield, Users, Gamepad2, Sparkles, Rocket, Globe } from 'lucide-react'
import ClickDotGame from '@/components/click-dot-game'
import ParticleBackground from '@/components/particle-background'
import AnimatedCounter from '@/components/animated-counter'
import ScrollAnimation from '@/components/scroll-animation'
import FloatingElements from '@/components/floating-elements'

export default function Home() {
  return (
    <div className="min-h-full relative">
      <ParticleBackground />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={200}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-105 cursor-pointer">
              <Sparkles className="w-4 h-4 mr-2 animate-spin" />
              ✨ New Features Just Dropped - Experience the Magic!
            </Badge>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={400}>
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-500 cursor-default">
              Build Your Dreams
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Into Reality</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={600}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into reality with our powerful platform. 
              Join thousands of creators who are already building the future.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to succeed, all in one place
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={400}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 shadow-md bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built for speed and performance. Get results in seconds, not minutes.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={500}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 shadow-md bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enterprise-grade security with 99.9% uptime guarantee.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={600}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 shadow-md bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work together seamlessly with powerful collaboration tools.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Take a Quick Break!
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Test your reflexes with our addictive dot-clicking game. How many can you catch in 30 seconds?
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={400}>
            <ClickDotGame />
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50/50 py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="up" delay={200}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2 group">
                  <AnimatedCounter 
                    end={10000} 
                    suffix="+" 
                    className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div className="space-y-2 group">
                  <AnimatedCounter 
                    end={99.9} 
                    suffix="%" 
                    className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="space-y-2 group">
                  <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="space-y-2 group">
                  <AnimatedCounter 
                    end={50} 
                    suffix="+" 
                    className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up" delay={200}>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers and start your journey today.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 transition-all duration-300">
                Contact Sales
              </Button>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={600}>
            <div className="mt-8 flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-2">Rated 5/5 by 1000+ customers</span>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
