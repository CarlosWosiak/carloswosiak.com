<div class="row">
    <div
        class="col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-lg-offset-3 col-md-offset-2 show"
    >
        <h1 class="no-show" id="name">
            <h5>Hi, my name is</h5>
            Carlos Wosiak
            <small>
                I am a Software Engineer at
                <a
                    class="itau"
                    href="https://migr-itau.mz-sites.com/relacoes-com-investidores/en/results-and-reports/interactive-dashboard/"
                    target="_blank"
                    rel="noreferrer">Itaú Unibanco</a
                >
            </small>
        </h1>
    </div>
</div>

<style>
    #name {
        transition-delay: 0.3s !important;
    }
    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #fff6f6;
    }

    h1 > small {
        font-size: 1.5rem;
        font-weight: 300;
        color: #e7e7e7;
    }

    h5 {
        color: var(--accent);
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

    .show {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
</style>
