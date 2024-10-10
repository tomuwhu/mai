<script>
  export let termekek
</script>
<h1>Kosár</h1>
<hr>
<div>
{#each termekek as item}
  <b>{item.nev}</b> <i>{item.ar}Ft</i> - <input type="number" bind:value={item.db} max=99 min=1> db
  <br>
{/each}
</div>

<style>
  i {
    color: rgb(112, 198, 112);
  }
  b {
    color: rgb(156, 156, 217);
  }
  div {
    font-size: 30px;
  }
  input {
    font-size: 30px;
    width: 90px;
  }
</style>