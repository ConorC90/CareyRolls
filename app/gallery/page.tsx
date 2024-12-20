// careyRolls Config
import careyRolls from "@/careyRolls.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";

import PaginationWrapper from "@/components/content/pagination-wrapper";
import { Separator } from "@/components/ui/separator";

// Next Imports
import type { Metadata } from "next";

// Data Imports
import { fetchTags, fetchCategoryPosts } from "@/lib/data";
import { notFound } from "next/navigation";

// Meta Data
export const metadata: Metadata = {
  title: {
    absolute: `Bike Touring Gallery | ${careyRolls.site_name}`,
  },
  description: `Bike tourning and camping image gallery`,
};

export default async function Posts({ searchParams }: { searchParams: any }) {
  const page =
    typeof searchParams.page === "string" && +searchParams.page > 1
      ? +searchParams.page
      : 1;
  const offset = (page - 1) * careyRolls.posts_per_page;
  const { data, totalPosts } = await fetchCategoryPosts(
    careyRolls.posts_per_page,
    offset,
    9
  );
  const lastPage = Math.ceil(totalPosts / careyRolls.posts_per_page);
  const tags = await fetchTags();

  async function fetchRecipesPage() {
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
  const recipesPage: PageProps = await fetchRecipesPage();
  if (!page) {
    return notFound();
  }

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1
            dangerouslySetInnerHTML={{ __html: recipesPage.title.rendered }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: recipesPage.content.rendered }}
          ></div>
        </Craft.Container>
      </Craft.Section>
      {/* <Craft.Section>
        <Craft.Container>
          <ContentGrid id="posts">
            {data.map((post: PostProps) => (
              <PostCard
                key={post.id}
                post={post}
                tags={post._embedded["wp:term"]?.[0] ?? []}
              />
            ))}
          </ContentGrid>
          <Separator className="my-6 md:my-12" />
          <PaginationWrapper page={page} lastPage={lastPage} />
        </Craft.Container>
      </Craft.Section> */}
    </Craft.Main>
  );
}
