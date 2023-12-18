<script>
    import morpho from "../../lib/content/morpho.json"
    import phonetics from "../../lib/content/phonetics.json"
    import syntax from "../../lib/content/syntax.json"
    import lexi from "../../lib/content/lexi.json";
    import about from "../about.svelte";
</script>

<nav class="bg-black">
    <div class="p-10 flex flex-wrap">
      <div class="flex-1">
        <a href="/about" class=" text-2xl font-semibold text-white hover:text-emerald-400">
          English linguistics
        </a>
      </div>
      <ul class="flex">
        <li>
          <a href="/morpho" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3 ">{morpho.header1}</a>
        </li>
        <li>
          <a href="/phonetics" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3 ">{phonetics.header1}</a>
        </li>
        <li>
          <a href="/lexi/+page" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3">{lexi.header1}</a>
        </li>
        <li>
          <a href="/syntax" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3">{syntax.header1}</a>
        </li>
      </ul>
    </div>
  </nav>