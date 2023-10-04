<script>
    import Logo from "$lib/assets/logo.png";
    import { onMount } from "svelte";

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".animate");
        hiddenElements.forEach((hiddenElement) =>
            observer.observe(hiddenElement)
        );
    });
</script>

<div class="show" />
<div class="logo animate">
    <a href="#about">
        <img src={Logo} alt="logo" />
    </a>
</div>
<div class="background-logo animate" />

<style>
    .logo {
        z-index: 100;
        position: fixed;
        display: flex;
        top: 2rem;
        left: 2rem;
        height: 3rem;
        width: 3rem;
        transition: all 0.2s;
    }

    .logo:hover {
        transform: translate(10px, -5px);
    }

    .background-logo {
        z-index: 99;
        position: fixed;
        display: flex;
        top: 2rem;
        left: 2rem;
        transition: all 0.2s;
        height: 3rem;
        width: 3rem;
        background: #1f465c;
        border-radius: 10px;
    }

    .animate {
        opacity: 0;
        filter: blur(5px);
        transform: translateX(-50%);
        transition: all 0.3s;
        transition-delay: 1.3s;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
    }

    @media (max-width: 600px) {
        .animate {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
        }
    }

    @media (max-width: 968px) {
        .logo {
            position: inherit;
            display: flex;
            margin: 1rem 0 0 2rem;
        }
        img {
            padding-top: 1rem;
        }

        .background-logo {
            display: none;
        }
    }
</style>
