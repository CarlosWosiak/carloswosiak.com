<script>
  import JobEntry from "../components/JobEntry.svelte";
  import { jobList } from "../data/jobs";
</script>

<div class="container">
  <div class="row">
    <div
      class="col-sm-10 col-md-4 col-lg-3 col-sm-offset-1 col-lg-offset-3 col-md-offset-2"
    >
      <div class="main-photo">
        <img
          src="https://portfolio-cw.s3.amazonaws.com/profile.jpg"
          alt="carlos wosiak at Machu Picchu"
        />
      </div>
      <h1>
        Carlos Wosiak
        <small>Software Engineer at Itaú Unibanco</small>
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
        Hi! I am Carlos, a Software Engineer at Itaú Unibanco, the largest
        banking institution in LATAM. I develop scalable and cost-efficient
        applications using C#, .NET, AWS, Angular, Python, and SQL Server,
        following the best practices for security and performance.
      </p>
      <p>
        I have a certification in AWS and a domain expertise in the FIX
        Protocol. I am passionate about learning new technologies and sharing
        knowledge with others.
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
</div>

<style>
  .main-photo {
    padding: 1rem 4rem 0 0;
  }
  .main-photo > img {
    border-radius: 2rem;
  }

  .profile-description {
  }
</style>
