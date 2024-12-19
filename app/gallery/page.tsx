// careyRolls Config
import careyRolls from "@/careyRolls.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";

import PaginationWrapper from "@/components/content/pagination-wrapper";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import type { Metadata } from "next";

// Data Imports
import { fetchTags, fetchCategoryPosts, fetchAllImages } from "@/lib/data";
import { notFound } from "next/navigation";

// Meta Data
export const metadata: Metadata = {
  title: {
    absolute: `Bike touring Photo Gallery | ${careyRolls.site_name}`,
  },
  description: `Bike tourning and camping photos`,
};

export default async function Posts() {
  // const lastPage = Math.ceil(totalPosts / careyRolls.posts_per_page);
  // const tags = await fetchTags();

  // async function fetchRecipesPage() {
  //   const res = await fetch(
  //     `${careyRolls.wordpress_url}/wp-json/wp/v2/pages?slug=gallery&_embed`,
  //     {
  //       next: { revalidate: 3600 },
  //     }
  //   );

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch page");
  //   }

  //   const data = await res.json();
  //   return data?.[0];
  // }
  const recipesPage: any = await fetchAllImages();
  console.log("recipesPage: ", recipesPage);
  // if (!page) {
  //   return notFound();
  // }

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <ContentGrid id="posts">
            {recipesPage.resources.map((image: any, index: number) => (
              <div key={image.asset_id}>
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.secure_url}
                  alt=""
                />
              </div>
            ))}
          </ContentGrid>
          <Separator className="my-6 md:my-12" />
          {/* <PaginationWrapper page={page} lastPage={lastPage} /> */}
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
