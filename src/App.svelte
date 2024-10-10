<script>
// @ts-nocheck
  import Kosar from './lib/Kosar.svelte'
  var termekek = [
      {nev: 'sajt ömlesztett 100g', ar: 2000, db: 1},
      {nev: 'tejföl 200g tesco', ar: 1800, db: 1},
    ]
  var j = 0
</script>

<main>
  {#each termekek as termek}
    {termek.nev} {termek.ar}Ft - {termek.db} db
  {/each}
  <div class="card">
    <Kosar bind:termekek={termekek}/>
  </div>
  <input type="range" min=0 max=6.28 step=0.01 bind:value={j}>

  <div class="c" style="top:{300 + 260*Math.sin(j)}px; left:{620+550*Math.cos(j)}px;"></div>
</main>

<style>
div.c {
  position: fixed;
  background-color: thistle;
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
</style>
