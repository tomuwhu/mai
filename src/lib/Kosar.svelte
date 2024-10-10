<script>
  export let termekek
</script>
<h1>
  Kosár
  <hr>
  {#each termekek as item}
    <b>{item.nev}</b> {item.ar}Ft - {item.db} db
    <br>
  {/each}
</h1>
<style>
  b {
    color: blue;
  }
</style>