<template>
    <div class="search">
        <input type="text" v-model="search" placeholder="Search Document" v-on:keyup="check" />
        <ul>
            <li>{{ docName }}</li>
        </ul>
    </div>
</template>

<script>
console.log('Search')

export default {
  name: 'Description',
  data () {
    return {
      search: '',
      documents: [
        { id: '1', name: 'Document1' },
        { id: '2', name: 'Document2' }
      ],
      docName: ''
    }
  },
  methods: {
    check () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.search === this.documents[i].id) {
          this.docName = this.documents[i].name
          console.log(this.docName)
        }
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
    list-style: none;
    justify-content: center;
    align-items: center
}
li {
    margin: 0 10px;
}
</style>
