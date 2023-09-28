<script>
    export let startDate = "";
    export let endDate = "";
    export let jobTitle = "";
    export let company = "";
    export let description = "";
</script>

<div class="row">
    <div
        class="col-sm-10 col-md-8 col-lg-7 col-sm-offset-1 col-md-offset-2 col-lg-offset-3"
    >
        <div class="row">
            {startDate} - {endDate}
            <h3>{jobTitle} - {company}</h3>
        </div>
        <div class="row">
            <p>
                {description}
            </p>
        </div>
    </div>
</div>
