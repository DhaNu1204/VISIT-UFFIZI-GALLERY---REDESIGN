import type { MDXComponents } from "mdx/types";
import BookingCard from "@/components/ui/BookingCard";
import PriceTable from "@/components/ui/PriceTable";
import TourCard from "@/components/ui/TourCard";
import ArtworkCard from "@/components/ui/ArtworkCard";
import FAQ from "@/components/ui/FAQ";
import ArtistInfoBox from "@/components/ui/ArtistInfoBox";
import ImageGallery from "@/components/ui/ImageGallery";
import TableOfContents from "@/components/content/TableOfContents";
import RelatedPages from "@/components/content/RelatedPages";

export const mdxComponents: MDXComponents = {
  // Custom components available in MDX files
  BookingCard,
  PriceTable,
  TourCard,
  ArtworkCard,
  FAQ,
  ArtistInfoBox,
  ImageGallery,
  TableOfContents,
  RelatedPages,

  // Typography overrides for MDX content
  h1: (props) => (
    <h1
      className="mb-6 text-4xl font-bold leading-tight text-navy md:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-10 text-2xl font-bold text-navy md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mb-3 mt-8 text-xl font-bold text-navy" {...props} />
  ),
  h4: (props) => (
    <h4 className="mb-2 mt-6 text-lg font-semibold text-navy" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-charcoal/85" {...props} />
  ),
  a: (props) => (
    <a
      className="font-medium text-burgundy underline decoration-burgundy/30 transition-colors hover:text-burgundy/80"
      {...props}
    />
  ),
  ul: (props) => <ul className="mb-4 ml-6 list-disc space-y-1" {...props} />,
  ol: (props) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1" {...props} />
  ),
  li: (props) => <li className="text-charcoal/85" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-gold pl-4 italic text-charcoal/70"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-gold/20" />,
  strong: (props) => (
    <strong className="font-semibold text-navy" {...props} />
  ),
};
