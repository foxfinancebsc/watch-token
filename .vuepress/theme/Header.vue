<template>
  <b-navbar toggleable="md" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <b-img :src="$withBase('/assets/images/foxfinancelogo200x200.png')" height="35"/>
      Fox Finance FOX on BSC 
    </b-navbar-brand>

  </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>
