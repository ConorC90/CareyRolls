import FAQ from "@/components/sections/faq";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import fjord from "@/fjord.config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `About Us | ${fjord.site_name}`,
  description: `Learn more about ${fjord.site_name}. ${fjord.site_description}`,
};

export async function fetchAboutPage() {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/pages?slug=about-us&_embed`,
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

export default async function Page() {
  const page: PageProps = await fetchAboutPage();
  if (!page) {
    return notFound();
  }

  const date = new Date(page.date);
  const author = page._embedded?.author?.[0] ?? null;
  return (
    <Craft.Main>
      <Craft.Container>
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }}></h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
      </Craft.Container>
      <FAQ />
    </Craft.Main>
  );
}
