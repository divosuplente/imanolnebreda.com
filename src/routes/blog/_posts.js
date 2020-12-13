import _ from "lodash";
import all from "../../../posts/*.md";

const transform = ({ filename, html, metadata }) => {
  // the permalink is the filename with the '.md' ending removed
  const slug = filename.replace(/\.md$/, "");

  // convert date string into a proper 'Date'
  const date = metadata.date ? new Date(metadata.date) : new Date();

  // return the new shape
  return { ...metadata, filename, html, slug, date };
};

export const findPost = (slug) => {
  // use lodash to find by field name
  return _.find(posts, { slug });
};

const posts = _.chain(all) // begin a chain
  .map(transform)
  .orderBy("date", "desc")
  .value();

// Create the cloud of tags
const tags = {};
const tagsArrayOfArrays = all.map((file) => file.metadata.tags);
const tagsFlattenedArray = [].concat.apply([], tagsArrayOfArrays).forEach((tag) => {
  tags[tag] = { count: tags[tag] && tags[tag]["count"] ? tags[tag]["count"] + 1 : 1 };
});

// Get all the cloud of categories
const cats = {};
const catsArrayOfArrays = all.map((file) => file.metadata.categories);
const catsFlattenedArray = [].concat.apply([], catsArrayOfArrays).forEach((cat) => {
  cats[cat] = { count: cats[cat] && cats[cat]["count"] ? cats[cat]["count"] + 1 : 1 };
});

export { tags as tags, cats as categories };
export default posts;
