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

        const hiddenElements = document.querySelectorAll(".animate");
        hiddenElements.forEach((hiddenElement) =>
            observer.observe(hiddenElement)
        );
    });
</script>

<div class="navigation show">
    <ul>
        <li class="animate">
            <a href="#about"
                ><div class="indicator" />
                <span>About</span>
            </a>
        </li>
        <li class="animate">
            <a href="#experience">
                <div class="indicator" />
                <span>Experience</span>
            </a>
        </li>
        <li class="animate">
            <a href="#contact"
                ><div class="indicator" />
                <span>Contact</span></a
            >
        </li>
    </ul>
</div>

<style>
    .navigation {
        z-index: 100;
        position: fixed;
        display: flex;
        top: 7rem;
        left: 1rem;
    }

    ul {
        list-style: none;
    }

    a {
        display: flex;
        color: rgb(202, 202, 202);
        font-size: 1.3rem;
        text-decoration: none;
    }

    li:hover a {
        color: white;
    }

    li:hover .indicator {
        width: 3rem;
        color: white;
    }

    .indicator {
        width: 2rem;
        height: 0.2rem;
        border-radius: 1rem;
        background: rgb(202, 202, 202);
        margin-right: 0.6rem;
        align-self: center;
        transition: all 0.2s;
    }

    @media (max-width: 968px) {
        .navigation {
            display: none;
        }
    }

    .animate {
        opacity: 0;
        filter: blur(5px);
        transform: translateX(-50%);
        transition: all 0.3s;
        overflow: hidden;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
    }

    li:nth-child(1) {
        transition-delay: 1.5s;
    }

    li:nth-child(2) {
        transition-delay: 1.6s;
    }

    li:nth-child(3) {
        transition-delay: 1.7s;
    }

    @media (max-width: 600px) {
        .animate {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
        }
    }
</style>
