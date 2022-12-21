<template>
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline mx-auto">
                <button class="btn btn-outline-success me-5" type="button"><router-link to="/">Products</router-link></button>
                <button class="btn btn-outline-secondary" type="button"><router-link to="/admin">Admin</router-link></button>
            </form>
        </nav>
    <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
