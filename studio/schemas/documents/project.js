import { format } from "date-fns";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "url",
      type: "url",
      title: "Site Url"
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "body",
      title: "Body",
      type: "projectPortableText"
    },
    {
      title: "Technology used",
      name: "techUsed",
      type: "array",
      of: [{ type: "reference", to: { type: "logo" } }]
    },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "projectMember" }]
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    },
    {
      title: "Show this project ?",
      name: "show",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "image"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date"
      };
    }
  }
};
