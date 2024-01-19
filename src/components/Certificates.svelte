<script>
    import { certificates } from "../data/certificates";

    import { onMount } from "svelte";

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
        id="certificate"
    >
        <h3>
            <span class="title-number">02.</span>
            <div class="title">Some Certifications I’ve Got</div>
            <div class="separator" />
        </h3>
    </div>
    <div
        class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 animate"
        id="certificate"
    >
        <div class="row space-between">
            {#each certificates as certificate}
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <img
                        class="certificate-image select-disable"
                        draggable="false"
                        src={certificate.image}
                        alt={certificate.title}
                    />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    h3 {
        display: flex;
    }

    .title-number {
        color: var(--accent);
        margin-right: 0.6rem;
    }

    .title {
        font-weight: 600;
        color: white;
        font-size: 1.5rem;
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

    .certificate-image {
        transition: transform 0.2s;
    }

    .certificate-image:hover {
        transform: scale(1.1);
    }

    .space-between {
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .animate {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
        }
    }
</style>
