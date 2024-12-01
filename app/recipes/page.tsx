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

// Meta Data
export const metadata: Metadata = {
  title: {
    absolute: `Bike touring Recipes | ${careyRolls.site_name}`,
  },
  description: `Bike tourning and camping recipes`,
};

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" && +searchParams.page > 1
      ? +searchParams.page
      : 1;
  const offset = (page - 1) * careyRolls.posts_per_page;
  const { data, totalPosts } = await fetchCategoryPosts(
    careyRolls.posts_per_page,
    offset,
    3
  );
  const lastPage = Math.ceil(totalPosts / careyRolls.posts_per_page);
  const tags = await fetchTags();

  return (
    <Craft.Main>
      <SecondaryHero
        title="All Recipes"
        subtitle={`${careyRolls.site_name} blog`}
      >
        All recipes
      </SecondaryHero>
      <Craft.Section>
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
      </Craft.Section>
    </Craft.Main>
  );
}
