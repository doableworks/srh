import csrData from "./csr.json";

export type CSREntry = {
  slug: string;
  title: string;
  intro: string;
  overview: string;
  bannerImage: string;
  mobileBannerImage: string;
  galleryImages?: string[];
  projectNote?: string;
  institutionalBackground?: string;
};

export function getAllCSRSlugs(): string[] {
  return csrData.map((item: CSREntry) => item.slug);
}

export function getCSRDetailBySlug(slug: string): CSREntry | undefined {
  return csrData.find((item: CSREntry) => item.slug === slug);
}
