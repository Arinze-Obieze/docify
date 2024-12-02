import Articles from "@/components/Cards/Articles";
import Collections from "@/components/Cards/Collection";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import Hero from "@/components/Hero";


export default function Home() {
  return (
 <div>
<section>
  <Hero/>
</section>
<section>
<Collections/>
</section>

<section>
  <Articles/>
</section>

<section>
  <Help/>
</section>
<footer>
  <Footer/>
</footer>
 </div>
  );
}
