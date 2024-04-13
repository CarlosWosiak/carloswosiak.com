<script>
  import { onMount } from "svelte";

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".no-show");
    hiddenElements.forEach((hiddenElement) => observer.observe(hiddenElement));
  });
</script>

<div
  class="col-sm-10 col-md-4 col-lg-4 col-sm-offset-1 col-md-offset-0 profile-description overflow-hidden"
>
  <div>
    <p class="no-show">
      Hi! I am Carlos, a Software Engineer at <a
        class="itau show"
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
    <p class="no-show">
      I have a bachelor's degree in Software Engineering, <span
        class="custom-stack AWS">AWS certifications</span
      >, domain expertise in the FIX Protocol and Financial trading exchanges. I
      am passionate about learning new technologies and sharing knowledge with
      others.
    </p>
    <p class="no-show">
      I have given training courses and presented at conferences on various
      topics related to software development.
    </p>
    <p class="contact no-show">
      <a
        class="message no-show"
        href="https://www.linkedin.com/in/carloswosiak/"
        rel="noopener noreferrer"
        target="_blank">Message me</a
      >
    </p>
  </div>
</div>

<style>
  .overflow-hidden {
    overflow-x: hidden;
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

  .profile-description > div > p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .no-show {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(100%);
    transition: all 0.3s;
    transition-delay: 0.7s;
  }

  .show {
    opacity: 0.9;
    filter: blur(0);
    transform: translateX(0);
  }

  p:nth-child(1) {
    transition-delay: 0.7s;
  }

  p:nth-child(2) {
    transition-delay: 0.9s;
  }

  p:nth-child(3) {
    transition-delay: 1.1s;
  }

  p:nth-child(4) {
    transition-delay: 1.3s;
  }

  .contact {
    text-align: center;
    padding-top: 2.5rem;
  }

  .message {
    color: rgb(var(--accent));
    background-color: transparent;
    border: 2px solid rgb(var(--accent));
    border-radius: 0.3rem;
    font-weight: 700;
    padding: 1.25rem 1.75rem;
    font-size: 1rem;
    line-height: 1;
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
    transition: all 0.3s;
  }

  .message:hover {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    p:nth-child(2) {
      transition-delay: 0.5s;
    }

    p:nth-child(3) {
      transition-delay: 0.5s;
    }

    p:nth-child(4) {
      transition-delay: 0.5s;
    }
  }
</style>
