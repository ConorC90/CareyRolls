// Next Imports
import Link from "next/link";
import Image from "next/image";

// Component Imports
import * as Craft from "@/components/craft/layout";
import BackButton from "../global/elements/back-button";
import AboutAuthor from "./about-author";

import BikeLogo from "@/public/CRFooterGraphic.png";

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <Craft.Article>
          <h1
            className="max-w-none !leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>

          <div className="flex not-prose gap-2 mb-6">
            <p>{date.toDateString()}</p> |
            {author && (
              <Link
                className="transition-all hover:opacity-70"
                href={`/posts/authors/${author.slug}`}
              >
                {author.name}
              </Link>
            )}
          </div>

          <div
            className="pt-6 md:pt-12"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>

          <div className="flex items-center justify-center">
            <Image
              src={BikeLogo}
              alt="BikeLogo"
              width={200}
              height={200}
              className="no-border"
            ></Image>
          </div>
          <BackButton />
        </Craft.Article>

        <AboutAuthor {...{ post, date, author }} />
      </Craft.Container>
    </Craft.Section>
  );
};

export default Article;
