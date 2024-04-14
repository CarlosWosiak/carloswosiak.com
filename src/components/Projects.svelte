<script>
  import { onMount } from "svelte";
  import { projects } from "../data/projects";

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });

    document
      .querySelectorAll(".animate")
      .forEach((hiddenElement) => observer.observe(hiddenElement));
  });
</script>

<div class="row container show">
  <div
    class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 animate"
    id="projects"
  >
    <h3>
      <span class="title-number">03.</span>
      <div class="title">Some Projects I’ve delivered</div>
      <div class="separator" />
    </h3>
  </div>

  <div
    class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 animate"
    id="certificate"
  >
    {#each projects as project}
      <div class="project-grid">
        <div class="project-image select-disable">
          <img
            src={project.image}
            alt={project.title}
            class="select-disable"
            draggable="false"
          />
        </div>
        <div class="project-content">
          <h2 class="project-overline">Featured Projects</h2>
          <h1 class="project-title">{project.title}</h1>
          <div class="description">
            {project.description}
          </div>

          <ul class="tech-used">
            {#each project.stack as tech}
              <li>{tech}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  h3 {
    display: flex;
  }

  .title-number {
    color: rgb(var(--accent));
    margin-right: 0.6rem;
  }

  .title {
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
  }

  .project-overline {
    margin: 10px 0px;
    color: rgb(var(--accent));
    font-size: 0.9rem;
    font-weight: 700;
    font-weight: 400;
  }

  .project-title {
    margin: 0px 0px 20px;
    font-size: clamp(24px, 5vw, 28px);
    font-weight: 700;
  }

  .separator {
    bottom: 0;
    left: 2.5rem;
    width: 40%;
    height: 0.1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.103);
    margin-left: 1rem;
    align-self: center;
    transition: all 0.2s;
    transition-delay: 2.3s;
  }
  .animate {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(50%);
    transition: all 0.3s;
    transition-delay: 0.1s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  .description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 0.3rem;
    background-color: #111e43;
    color: #a8b2d1;
    font-size: 1rem;
  }

  .project-grid {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 3rem;
  }

  .project-content {
    grid-column: 1 / 9;
  }

  .project-content {
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
  }

  .project-image {
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: 1;
  }

  .project-image img {
    opacity: 0.7;
  }
  .project-image img:active {
    pointer-events: none;
  }

  .project-image img:hover {
    opacity: 1;
    transition: 0.3s;
  }

  .project-image img::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    transition: var(--transition);
    background-color: rgb(--accent);
    mix-blend-mode: screen;
  }

  .tech-used {
    -webkit-box-pack: end;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
  }

  .tech-used li {
    margin: 0px 20px 5px 0px;
    white-space: nowrap;
    font-size: 0.8rem;
  }

  .select-disable {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .project-grid:nth-of-type(2n + 2) .project-image {
    grid-column: 1 / 8;
  }

  .project-grid:nth-of-type(2n + 2) .project-content {
    grid-column: 7 / -1;
    text-align: right;
  }
  .project-grid:nth-of-type(2n + 2) .project-content ul {
    justify-content: flex-end;
  }

  @media (max-width: 750px) {
    .animate {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0);
    }

    img {
      display: none;
    }

    .project-grid {
      margin-bottom: 0;
    }

    .project-content,
    .project-grid:nth-of-type(2n + 2) .project-content {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      text-align: left;
    }
  }
</style>
