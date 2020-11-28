<template>
  <div id="app">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Shadowrun
          </h1>
          <h2 class="subtitle">
            3rd Edition
          </h2>
        </div>
      </div>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/characters">Characters</router-link>
    </div>
    <router-view/>
  </div>
</template>
