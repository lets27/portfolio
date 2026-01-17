
import Grid from "@/components/Grid";
import Hero from "@/components/hero";


export default function Home() {
  return (
    // Removed justify-center and items-center to prevent "stretching" content to fill the screen
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      <div className="max-w-7xl w-full mx-auto">
       
        <Hero/>
        
        {/* Place Grid inside the max-w container to keep it aligned */}
        <Grid/>
      </div>

     
    </main>
  );
}
 

