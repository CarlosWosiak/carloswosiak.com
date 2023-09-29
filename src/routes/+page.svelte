<script>
  import JobEntry from "../components/JobEntry.svelte";
  import { jobList } from "../data/jobs";
</script>

<div class="container">
  <div class="row initial-presentation">
    <div
      class="col-sm-10 col-md-4 col-lg-3 col-sm-offset-1 col-lg-offset-3 col-md-offset-2"
    >
      <div class="main-photo">
        <img
          src="https://portfolio-cw.s3.amazonaws.com/profile.jpg"
          alt="carlos wosiak @ Machu Picchu"
        />
      </div>
      <h1>
        Carlos Wosiak
        <small
          >Software Engineer at
          <a
            class="itau"
            href="https://migr-itau.mz-sites.com/relacoes-com-investidores/en/results-and-reports/interactive-dashboard/"
            target="_blank"
            rel="noreferrer">Itaú Unibanco</a
          ></small
        >
      </h1>
      <h2>
        I develop scalable and cost-efficient applications following the best
        practices for security and performance.
      </h2>
    </div>
    <div
      class="col-sm-10 col-md-4 col-lg-3 col-sm-offset-1 col-md-offset-0 profile-description"
    >
      <p>
        Hi! I am Carlos, a Software Engineer at <a
          class="itau"
          href="https://migr-itau.mz-sites.com/relacoes-com-investidores/en/results-and-reports/interactive-dashboard/"
          target="_blank"
          rel="noreferrer">Itaú Unibanco</a
        >, the largest banking institution in LATAM. I develop scalable and
        cost-efficient applications using
        <span class="csharp">C#</span>,
        <span class="dotnet">.NET</span>,
        <span class="AWS">AWS</span>,
        <span class="angular">Angular</span>,
        <span class="python">Python</span>, and SQL Server, following the best
        practices for security and performance.
      </p>
      <p>
        I have a certification in <span class="custom-stack AWS">AWS</span> and a
        domain expertise in the FIX Protocol. I am passionate about learning new
        technologies and sharing knowledge with others.
      </p>
      <p>
        I have given training courses and presented at conferences on various
        topics related to software development.
      </p>
    </div>
    <div class="col-sm-12 col-md-6" />
  </div>
  {#each jobList as job}
    <JobEntry {...job} />
  {/each}
  <div class="row footer">
    <div
      class="col-sm-10 col-md-3 col-lg-2 col-sm-offset-1 col-lg-offset-7 col-md-offset-8"
    >
      Built with Svelte, mini.css and ❤️, deployed with Vercel. All text is set
      in the Inter typeface.
    </div>
  </div>
</div>

<style>
  .initial-presentation {
    margin: 4rem 0;
  }

  .main-photo {
    padding: 1rem 4rem 0 0;
  }
  .main-photo > img {
    border-radius: 2rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h1 > small {
    font-size: 1.5rem;
    font-weight: 300;
    color: #cfcfcf;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .itau {
    font-weight: 800;
    color: white;
    transition: 0.3s;
  }

  .itau:hover {
    color: #f28e46;
    text-decoration: none;
  }

  .csharp,
  .dotnet {
    color: #4d92e3;
  }

  .AWS {
    color: #f28e46;
  }

  .angular {
    color: #d64144;
  }

  .python {
    color: #f28e46;
  }

  .profile-description > p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .footer {
    margin-bottom: 4rem;
  }
</style>
