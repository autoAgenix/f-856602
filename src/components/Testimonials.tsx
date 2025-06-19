import { testimonials } from '@/constants/testominials'
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials = () => {
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by finance teams worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our platform transforms financial operations for businesses
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} /> 
       
      </div>
    </section>
  );
};

export default Testimonials;
