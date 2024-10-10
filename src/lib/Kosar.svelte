<script>
  export let termekek
</script>
<h1>
  Kosár
  <hr>
  {#each termekek as item}
    <b>{item.nev}</b> {item.ar}Ft - <input type="number" bind:value={item.db} max=99 min=1> db
    <br>
  {/each}
</h1>
<style>
  b {
    color: blue;
  }
  input {
    font-size: 40px;
    width: 90px;
  }
</style>