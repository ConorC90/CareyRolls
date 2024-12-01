// import FAQ from "@/components/sections/faq";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import careyRolls from "@/careyRolls.config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `About Us | ${careyRolls.site_name}`,
  description: `Learn more about ${careyRolls.site_name}. ${careyRolls.site_description}`,
};

async function fetchAboutPage() {
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
  const page: PageProps = await fetchAboutPage();
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
