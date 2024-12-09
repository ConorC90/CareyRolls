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
import Image from "next/image";

// Data Imports
import { fetchTags, fetchCategoryPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import BikeLogo from "@/public/CRFooterGraphic.png";

// Meta Data
export const metadata: Metadata = {
  title: `Blog | ${careyRolls.site_name}`,
  description: `Read the ${careyRolls.site_name} blog. ${careyRolls.site_description}`,
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
    1
  );
  // const { data, totalPosts } = await fetchPosts(
  //   careyRolls.posts_per_page,
  //   offset,
  //   5
  // );
  async function fetchBlogPage() {
    const res = await fetch(
      `${careyRolls.wordpress_url}/wp-json/wp/v2/pages?slug=blog&_embed`,
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

  const lastPage = Math.ceil(totalPosts / careyRolls.posts_per_page);
  const tags = await fetchTags();
  const blogPage: PageProps = await fetchBlogPage();
  if (!page) {
    return notFound();
  }
  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1
            dangerouslySetInnerHTML={{ __html: blogPage.title.rendered }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: blogPage.content.rendered }}
          ></div>
        </Craft.Container>
      </Craft.Section>

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
