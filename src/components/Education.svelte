<script>
    import { degreeList } from "../data/education";

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
        id="education"
    >
        <h3>
            <span class="title-number">03.</span>
            <div class="title">Education</div>
            <div class="separator" />
        </h3>
    </div>
    <div
        class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 animate"
        id="education"
    >
        {#each degreeList as degree}
            <div class="education-entry">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-1">
                        <img
                            class="education-image select-disable"
                            draggable="false"
                            src={degree.image}
                            alt={degree.title}
                        />
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-10">
                        <h3>{degree.title}</h3>
                        <h4>{degree.university}</h4>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    h3 {
        display: flex;
        font-weight: 600;
        color: white;
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

    .education-entry {
        margin-bottom: 3rem;
        transition: 0.3s;
    }

    .education-entry:hover {
        background-color: rgba(255, 255, 255, 0.096);
        border-radius: 1rem;
    }

    .education-image {
        border-radius: 15px;
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

    .select-disable {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    @media (max-width: 600px) {
        .animate {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
        }
    }
</style>
