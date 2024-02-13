<script lang="ts">
    import { page } from "$app/stores";
    import material from "$lib/content/linguistics";

    // const sum = ( a, b, c ) => {
    //     console.log("a", a)
    //     console.log("b", b)
    //     return a + b + c
    // }

    // const data = {
    //     a: 1,
    //     b: 2
    // }

    // const data_with_c = {
    //     ...data,
    //     c: 3
    // }

    // $: console.log("data_with_c", data_with_c, sum(data_with_c.a, data_with_c.b, data_with_c.c))

    // const s_1 = "ad"
    // const s_2 = "am"

    // $: console.log(sum({b: s_2, a: s_1, c: "3"}))

    // $: console.log($page)
</script>

<nav class="flex gap-4">
    {#each Object.keys(material) as value}
        <a href="/test/{value}">{value}</a>
    {/each}
</nav>


<h1>{material?.[$page?.params?.slug].header}</h1>

{#if material?.[$page?.params?.slug]?.paragraph}
    {#each material?.[$page?.params?.slug]?.paragraph as para}
        <p class="p-2">{para}</p>
    {/each}
{/if}