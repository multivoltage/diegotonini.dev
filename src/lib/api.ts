import { Pill } from "~/types";
import { client } from "./datocmsClient";

export const getPills = async () => {
  "use server";
  const query = `
      query Pills {
        allPills {
          id
          title
          writedAt
          smallDescription
          _publishedAt
          _createdAt
        }
      }
    `;
  const { allPills } = await client.request<{
    allPills: Omit<Pill, "descriptionProblems">[];
  }>(query);

  return allPills;
};

export const getPillById = async (id: string) => {
  "use server";
  const query = `
        query Pill($id: ItemId!) {
          pill(filter: { id: { eq: $id } }){
            id           
            title  
            writedAt 
            smallDescription 
            descriptionProblem {
              value
            } 
            descriptionSolution {
              value
            }  
            _publishedAt
            _createdAt                         
          }       
        }
    `;
  const { pill } = await client.request<{ pill: Pill }>(query, {
    id,
  });
  return pill;
};

export const getPillBySlug = async (slug: string) => {
  "use server";
  const query = `
        query Pill($slug: ItemId!) {
          pill(filter: { id: { eq: $slug } }){
            id           
            title  
            writedAt 
            smallDescription 
            descriptionProblem {
              value
            } 
            descriptionSolution {
              value
            }  
            _publishedAt
            _createdAt                         
          }       
        }
    `;
  const { pill } = await client.request<{ pill: Pill }>(query, {
    slug,
  });
  return pill;
};
