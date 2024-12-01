import { MetadataRoute } from "next";
import careyRolls from "@/careyRolls.config";

async function getPosts() {
  const res = await fetch(
    `${careyRolls.wordpress_url}/wp-json/wp/v2/posts?_embed&orderby=date`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: PostProps[] = await res.json();

  return { data };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getPosts();

  const staticUrls: StaticUrlProps[] = [
    {
      url: `${careyRolls.site_domain}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${careyRolls.site_domain}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${careyRolls.site_domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${careyRolls.site_domain}/all`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${careyRolls.site_domain}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return [
    ...staticUrls,
    ...data.map(
      (post): StaticUrlProps => ({
        url: `${careyRolls.site_domain}/posts/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      })
    ),
  ];
}
