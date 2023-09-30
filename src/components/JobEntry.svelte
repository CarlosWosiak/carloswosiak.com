<script>
    export let startDate = "";
    export let endDate = "";
    export let jobTitle = "";
    export let company = "";
    export let description = [""];
    export let stack = [""];

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
        class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 job-entry animate"
        id="experience"
    >
        <div class="row">
            <div class="job-period">{startDate} - {endDate}</div>
            <h3>
                {jobTitle}
                <span class="company">{company ? ` @ ${company}` : ""}</span>
            </h3>
        </div>
        <div class="row">
            <ul>
                {#each description as point}
                    <li>{point}</li>
                {/each}
            </ul>
        </div>
        <div class="row">
            {#each stack as tech}
                <div class="badge">{tech}</div>
            {/each}
        </div>
    </div>
</div>

<style>
    ul li::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: white;
    }

    li {
        margin-bottom: 0.5rem;
    }

    ul {
        list-style: none;
    }

    .job-period {
        align-self: center;
        margin-right: 2rem;
    }

    .job-entry {
        margin-bottom: 3rem;
        transition: 0.3s;
    }

    .job-entry:hover {
        background-color: rgba(255, 255, 255, 0.096);
        border-radius: 1rem;
    }

    .badge {
        background: #939ad13d;
        color: #a1b3f5;
        padding: 0.4rem 1rem;
        border-radius: 1rem;
        margin: 0.5rem 0.5rem;
        transition: 0.3s;
    }

    .badge:hover {
        background: #15171f3d;
    }

    .animate {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(50%);
        transition: all 0.3s;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
    }

    .company {
        font-weight: 600;
        color: white;
    }
    @media (max-width: 600px) {
        .animate {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
        }
    }
</style>
