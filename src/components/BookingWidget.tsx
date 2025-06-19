
import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Schedule a Consultation
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your business with AI automation? Book a free 30-minute consultation to discuss your needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Cal 
            namespace="30min"
            calLink="sankalp-uexcbz/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view"}}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
