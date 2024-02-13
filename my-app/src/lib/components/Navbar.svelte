<script>
  import material from "$lib/content/linguistics";
</script>

<nav class="bg-black">
    <div class="p-2 sm:p-10 flex flex-wrap justify-center">
      <div class="flex-1 hidden sm:block">
        <a href="/" class=" text-2xl font-semibold text-white hover:text-emerald-400">
          English linguistics
        </a>
      </div>
      <ul class="flex">
        <li>
          <a href="/morpho" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3 ">{material["navbar"].header1}</a>
        </li>
        <li>
          <a href="/phonetics" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3 ">{material["navbar"].header2}</a>
        </li>
        <li>
          <a href="/lexi" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3">{material["navbar"].header3}</a>
        </li>
        <li>
          <a href="/syntax" class=" text-xl text-white hover:bg-emerald-400 hover:underline hover:text-black p-3">{material["navbar"].header4}</a>
        </li>
      </ul>
    </div>
  </nav>