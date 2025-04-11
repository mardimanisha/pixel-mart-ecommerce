import Banner from "@/components/Banner";
import CoverCard from "@/components/CoverCard";
import Section from "@/components/Section";
import MainLayout from "@/layout/MainLayout";
import covers from '../../public/data/cover.json'
//import ProductDetail from "@/components/ProductDetail";

export default function Home() {
  return (
      <MainLayout>
          <div className='container my-10 mx-2 pt-10 w-[83%]'> 
                <div className="m-10 flex flex-row justify-evenly items-center w-full px-[2rem] gap-8 border-2 p-8 overflow-auto">
                    {covers.covers.slice(0,2).map((cover) => (
                        <CoverCard key={cover.id} name={cover.name} image={cover.images} />
                    ))}
                </div>
                <Banner />
                <Section title="Featured Products" filterType="featured" />
                <Section title="New Arrivals" filterType="new" />
                <div className='m-10'>
                    <h1 className='text-2xl font-bold mb-6'>Explore More</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center'>
                        {covers.covers.slice(2, 6).map((cover) => (
                            <CoverCard key={cover.id} name={cover.name} image={cover.images} />
                        ))}
                    </div>
                    
              </div>
              
            </div>
        </MainLayout>
  );
}
