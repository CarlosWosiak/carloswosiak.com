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
            observer.observe(hiddenElement),
        );
    });
</script>

<div
    class="col-sm-10 col-md-4 col-lg-3 col-sm-offset-1 col-lg-offset-3 col-md-offset-2 show"
>
    <div class="no-show" id="main-photo">
        <img
            draggable="false"
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
        position: relative;
        padding-bottom: calc((700 / 900) * 100%);

        transition: all 0.2s;
        transition-delay: 0.5s;
    }

    #main-photo > img {
        position: absolute;
        border-radius: 2rem;
        min-height: 10rem;
        min-width: 10rem;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 400;
        color: #e7e7e7;
    }

    .no-show {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(30px);
        transition: all 0.3s;
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
