// import FAQ from "@/components/sections/faq";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import careyRolls from "@/careyRolls.config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `Photo Gallery | ${careyRolls.site_name}`,
  description: `Bike touring and travel Photo gallery from CareyRolls`,
};

async function fetchGalleryPage() {
  const res = await fetch(
    `${careyRolls.wordpress_url}/wp-json/wp/v2/pages?slug=gallery&_embed`,
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

export default async function GalleryPage() {
  const page: PageProps = await fetchGalleryPage();
  if (!page) {
    return notFound();
  }

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }}></h1>
          <div
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></div>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
