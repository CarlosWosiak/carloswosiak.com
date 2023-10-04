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
        hiddenElements.forEach((hiddenElement) =>
            observer.observe(hiddenElement)
        );
    });
</script>

<div
    class="col-sm-10 col-md-4 col-lg-3 col-sm-offset-1 col-lg-offset-3 col-md-offset-2 show"
>
    <h1 class="no-show" id="name">
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
    <div class="no-show" id="main-photo">
        <img
            src="https://portfolio-cw.s3.amazonaws.com/profile.jpg"
            alt="carlos wosiak @ Machu Picchu"
        />
    </div>
    <h2 class="no-show" id="description">
        I develop scalable and cost-efficient applications following the best
        practices for security and performance.
    </h2>
</div>

<style>
    #main-photo {
        padding: 1rem 4rem 0 0;
        transition: all 0.2s;
        transition-delay: 0.5s;
    }

    #main-photo > img {
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

    .no-show {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(30px);
        transition: all 0.3s;
    }

    #name {
        transition-delay: 0.3s !important;
    }

    #description {
        transition-delay: 0.5s !important;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
</style>
