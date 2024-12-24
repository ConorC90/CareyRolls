// careyRolls Config
import careyRolls from "@/careyRolls.config";

// Component Imports
import * as Craft from "@/components/craft/layout";

// Next Imports
import type { Metadata } from "next";

// Data Imports

// Meta Data
export const metadata: Metadata = {
  title: {
    absolute: `Carey Rolls Contact page | ${careyRolls.site_name}`,
  },
  description: `The Conotact page for Conor Carey and Alina Rolls`,
};

export default async function ContactUS({
  searchParams,
}: {
  searchParams: any;
}) {
  async function fetchContactPage() {
    const res = await fetch(
      `${careyRolls.wordpress_url}/wp-json/wp/v2/pages?slug=contact-us&_embed`,
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
  const contactPage: PageProps = await fetchContactPage();

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1
            dangerouslySetInnerHTML={{ __html: contactPage.title.rendered }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: contactPage.content.rendered }}
          ></div>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
