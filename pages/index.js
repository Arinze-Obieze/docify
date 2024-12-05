import Articles from "@/components/Articles";
import Collections from "@/components/Cards/Collection";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Layout from "@/components/layout";


export default function Home() {
  return (
 <Layout herotext={'👋 Hey, Need Any Help?'}>

<section>
<Collections/>
</section>

<section>
  <Articles/>
</section>

<section>
  <Help/>
</section>

 </Layout>
  );
}
