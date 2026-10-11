
// app/components/Grid.tsx
import Image from "next/image";
import { gridItems } from "@/constants/constants";
import GridCard from "./ui/GridCard";

const Grid = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10">
 
<div className="
  grid grid-cols-1 
  md:grid-cols-6 
  /* Remove md:grid-rows-4 */
  lg:grid-cols-5 
  gap-4 lg:gap-6
  grid-flow-dense
">
        {gridItems.map((item) => (
          <GridCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Grid;