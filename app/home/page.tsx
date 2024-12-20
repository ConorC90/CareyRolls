// import FAQ from "@/components/sections/faq";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import careyRolls from "@/careyRolls.config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `${careyRolls.site_name}`,
  description: `Landing page for ${careyRolls.site_name}`,
};

async function fetchPage() {
  const res = await fetch(
    `${careyRolls.wordpress_url}/wp-json/wp/v2/pages?slug=home&_embed`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const data = await res.json();
  return data?.[0];
}

export default async function HomePage() {
  const page: PageProps = await fetchPage();
  if (!page) {
    return notFound();
  }

  return (
    <Craft.Main>
      <Craft.Container>
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }}></h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
      </Craft.Container>
      {/* <FAQ /> */}
    </Craft.Main>
  );
}
