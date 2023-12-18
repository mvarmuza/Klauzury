<script>
    import '../app.css'
    import morpho from "../lib/content/morpho.json"
    import phonetics from "../lib/content/phonetics.json"
    import syntax from "../lib/content/syntax.json"
    import lexi from "../lib/content/lexi.json";
    import about from "./about.svelte";
    import Navbar from './components/navbar.svelte';
</script>

<Navbar />

<slot />