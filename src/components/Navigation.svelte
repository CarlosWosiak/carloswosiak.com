<div class="navigation">
    <ul>
        <li>
            <a href="#about"
                ><div class="indicator" />
                <span>About</span>
            </a>
        </li>
        <li>
            <a href="#experience">
                <div class="indicator" />
                <span>Experience</span>
            </a>
        </li>
        <li>
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
</style>
