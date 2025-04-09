
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the Magic of <span className="text-india-saffron">Incredible India</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the rich cultural heritage, breathtaking landscapes, and unforgettable adventures across the diverse tapestry of India.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/featured">
              <Button size="lg" className="bg-india-saffron hover:bg-india-marigold text-white">
                Explore Destinations
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Plan Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative triangle pattern (saffron and green) */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-12" style={{ 
          background: 'linear-gradient(135deg, transparent 50%, #FF9933 50%)'
        }}></div>
        <div className="absolute bottom-0 right-0 w-full h-12" style={{ 
          background: 'linear-gradient(45deg, #138808 50%, transparent 50%)' 
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
