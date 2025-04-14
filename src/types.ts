import type { Document } from "datocms-structured-text-utils";

export interface Pill {
  id: string;
  title: string;
  slug: string;
  smallDescription: string;
  writedAt: string;
  _createdAt: string;
  _publishedAt: string;
  descriptionProblem: {
    value: Document;
  };
  descriptionSolution: {
    value: Document;
  };
}
