const careyRolls: ConfigProps = {
  site_name: "Carey Rolls", // site name: used in the header and footer
  site_domain: "https://careyrolls.com", // site domain: used in the sitemap
  site_title: "Carey Rolls | Biketouring travel blog",
  site_description:
    "careyrolls is a bike tourning travel blog with recipes and stories from Conor Carey and Alina Rolls",
  keywords: [
    "Bikepacking",
    "Bike Touring",
    "Camping Recipes",
    "Conor Carey",
    "Alin Rolls",
  ],
  authors: [{ name: "Conor Carey", url: "https://careyrolls.com" }],
  posts_per_page: 9,
  wordpress_url: "https://api.careyrolls.com",
  google_analytics_id: "G-7VM8KZENP7",

  logo: "/CRlogo.png",

  // change the font using `next/font` in `layout.tsx` in the app directory.
  // check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

  menu: {
    main: {
      home: "/",
      blog: "/posts",
      about: "/about",
      contact: "/contact",
      /* recipes: "/recipes",
      gallery: "/gallery"
 */
    },
    content: {
      authors: "/posts/authors", // default is `/posts/authors`
      // categories: "/posts/categories", // default is `/posts/categories`
      // tags: "/posts/tags", // default is `/posts/tags`
      // pages: "/all", // default is `/all`
    },
    legal: {
      privacy_policy: "/privacy-policy", // default is `/privacy-policy`
      privacy_policy_text: "Privacy Policy", // default is `Privacy Policy`
      terms_of_service: "/terms-of-service", // default is `/terms-of-service`
      terms_of_service_text: "Terms of Service", // default is `Terms of Service`
    },
  },

  nav_menu: {
    title: "Pages",
    items: [
      {
        title: "About",
        href: "/about",
        description: "Learn more about our blog.",
      },
      {
        title: "Contact",
        href: "/contact",
        description:
          "Get in touch with us if you have any questions or feedback. We would love to hear from you.",
      },
      {
        title: "Authors",
        href: "/posts/authors",
        description: "Meet the authors",
      },
    ],
  },
};

export default careyRolls;
