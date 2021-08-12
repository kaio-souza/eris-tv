<template>
  <b-navbar toggleable="lg" type="dark"  id="mainNav">
    <b-navbar-brand href="/">
      <img class="logo" src="@/assets/logo.png" width=" 150px"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item title="" href="#">
          <i class="fa fa-search" aria-hidden="true"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Head'
}
</script>

