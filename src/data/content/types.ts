export type PageContent<T> = Record<string, T>;

export function getContent<T>(
  content: PageContent<T>,
  locale: string
): T {
  return content[locale] || content["en"];
}
