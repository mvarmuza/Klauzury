<script lang="ts">
    import heroBgImage from '$lib/content/hero.jpeg';
    import HeaderOne from "$lib/components/Header_one.svelte";
    import material from "$lib/content/linguistics";

    function scrollIntoView(){
        const el = document.querySelector('#continue');
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth"
        })
    }
</script>

<div class="w-full bg-cover bg-center" 
style="background-image: url({heroBgImage}); ">
    <div class=" relative flex-col flex items-center  w-full h-full pb-40 pt-20 bg-gray-900 bg-opacity-50" >
        <HeaderOne title="Charles University English linguistics"/>
        <p class="text-white md:text-3xl font-sans mt-4 p-4 sm:p-10 m-auto sm:pb-40">
            {material["hero"].messageInfo}
        </p>
        <a href="#continue" on:click|preventDefault={scrollIntoView}>
            <svg class="absolute bottom-0 m-auto left-0 right-0 translate-x-2 w-24 h-24 fill-current text-white hover:text-emerald-400" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24"><g data-name="Layer 2">
                <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" data-name="arrow-ios-downward"/></g>
            </svg>
        </a>
    </div>
</div>
