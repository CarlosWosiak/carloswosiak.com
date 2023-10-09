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

<div class="row contact-container" id="contact">
    <div
        class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-lg-offset-3 col-md-offset-2 show"
    >
        <h1 class="no-show">Get In Touch</h1>
        <div class="sub-text no-show">
            <h2>
                Do you have any interesting project and want someone to help you
                with? my inbox is always open!
            </h2>
        </div>
        <a
            class="email no-show"
            href="mailto:carlosw403@hotmail.com"
            rel="noopener noreferrer"
            target="_blank">E-mail me</a
        >
    </div>
</div>

<style>
    .contact-container {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    .contact-container > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 800;
        text-align: center;
    }

    .sub-text {
        align-self: center;
        max-width: 30rem;
    }

    h2 {
        font-size: 1.2rem;
        text-align: center;
    }

    .email {
        color: #42fffc;
        background-color: transparent;
        border: 2px solid #42fffc;
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

    .email:hover {
        font-size: 1.2rem;
    }

    .no-show {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(30px);
        transition: all 0.3s;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
</style>
