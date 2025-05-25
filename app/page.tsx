'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Zap, Shield, Users, Gamepad2 } from 'lucide-react'
import ClickDotGame from '@/components/click-dot-game'

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm animate-pulse">
            🚀 Now live - Join the revolution
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-in fade-in-50 slide-in-from-bottom-4 duration-1000">
            Build Your Dreams
            <span className="block text-blue-600 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-300">Into Reality</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into reality with our powerful platform. 
            Join thousands of creators who are already building the future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built for speed and performance. Get results in seconds, not minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise-grade security with 99.9% uptime guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work together seamlessly with powerful collaboration tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gamepad2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              Take a Quick Break!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your reflexes with our addictive dot-clicking game. How many can you catch in 30 seconds?
            </p>
          </div>
          <ClickDotGame />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group px-8 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-2">Rated 5/5 by 1000+ customers</span>
          </div>
        </div>
      </section>
    </div>
  )
}





