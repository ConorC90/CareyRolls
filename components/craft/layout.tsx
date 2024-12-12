import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme/theme-provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { Providers } from "@/app/providers";
// LAYOUT
// Layout Component
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth bg-offwhite focus:scroll-auto", className)}
    >
      <body className={cn("flex flex-col min-h-screen  flex-grow", className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
};

// Main Component
type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        // General Prose
        "prose prose:font-sans md:prose-lg lg:prose-xl max-w-none flex-grow",
        // Prose Headings
        "prose-headings:font-normal",
        // Inline Links
        "prose-a:border-b prose-a:border-b-primary dark:prose-a:border-b-primary prose-a:font-normal prose-a:text-primary dark:prose-a:text-primary hover:prose-a:border-b-primary hover:prose-a:opacity-75 dark:hover:prose-a:border-b-primary prose-a:no-underline prose-a:transition-all",
        // Blockquotes
        "prose-blockquote:not-italic",
        // Images
        "prose-img:rounded-lg prose-img:shadow-lg prose-img:border",
        className
      )}
      id={id}
    >
      {children}
    </main>
  );
};

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-6 md:py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn("max-w-5xl mx-auto", "p-6 sm:p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Article Component
type ArticleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article
      className={cn(
        "prose md:prose-lg lg:prose-xl",
        "prose-headings:font-normal prose-main ",
        "prose-img:rounded-lg prose-img:shadow-lg prose-img:border",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
