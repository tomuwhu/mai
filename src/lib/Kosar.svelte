<script>
  export let termekek
</script>
<h1>
  Kosár
  <hr>
  {#each termekek as item}
    {item.nev} {item.db} {item.db}
    <br>
  {/each}
</h1>
