<template>
  <div class="container">
    <h2>Filterbare Liste</h2>
    <p>Tippe etwas in das Eingabefeld, um die Liste nach spezifischen Elementen zu durchsuchen:</p>
    <input class="form-control" v-model="searchText" type="text" placeholder="Suchen...">
    <br>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in filteredList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      items: ['First item', 'Second item', 'Third item', 'Fourth']
    };
  },
  computed: {
    filteredList() {
      return this.items.filter(item => {
        return item.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
/* Hier kannst du spezifische Styles für deine Komponente definieren */
</style>
