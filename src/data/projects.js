import cdc from "$lib/assets/cdc.jpg";
import revisor from "$lib/assets/revisor.jpg";

export const projects = [
  {
    title: "Ideal Reviewer",
    description: `A platform where undergraduate, master's, and doctoral students can
        hire reviewers to evaluate their thesis, dissertation, or academic
        work. The system serves as a bridge, allowing reviewers to register
        and offer their services to students seeking expert feedback and
        guidance on their scholarly writings.`,
    image: revisor,
    imageWidth: 700,
    imageHeight: 438,
    stack: ["Figma", "Ruby On Rails", "React", "PostgreSQL", "Docker"],
  },
  {
    title: "Compre do Campo",
    description: `Subscription service to get rural products directly from farmers,
    allowing subscribers to choose a plan to receive a basket of fruits
    and vegetables weekly for a fixed price. By connecting consumers
    directly with local farmers, its aim is to provide fresh and
    high-quality produce while maintaining an attractive price.`,
    image: cdc,
    imageWidth: 1000,
    imageHeight: 463,
    stack: ["Ruby On Rails", "Angular", "PostgreSQL", "Docker"],
  },
];
