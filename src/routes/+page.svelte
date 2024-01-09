<script>
  import Experience from "../components/Experience.svelte";
  import Footer from "../components/Footer.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Logo from "../components/Logo.svelte";
  import Contact from "../components/Contact.svelte";
  import Loader from "../components/Loader.svelte";
  import Introduction from "../components/Introduction/Introduction.svelte";
  import { onMount } from "svelte";
  let showLoader = true;

  onMount(() => {
    setTimeout(() => {
      showLoader = false;
    }, 1200);
  });
</script>

{#if showLoader}
  <Loader />
{:else}
  <div class="container no-show">
    <Logo />
    <Navigation />
    <Introduction />
    <Experience />
    <Contact />
    <Footer />
  </div>
{/if}
