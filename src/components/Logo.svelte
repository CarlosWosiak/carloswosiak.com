<script>
    import Logo from "$lib/assets/logo.png";
</script>

<div class="logo">
    <a href="#about">
        <img src={Logo} alt="logo" />
    </a>
</div>
<div class="background-logo" />

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
