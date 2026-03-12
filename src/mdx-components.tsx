import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@/components/content/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
