<template>
    <div class="student">
        <h1>Students</h1>
        <li> {{ students }} </li>
        <li> {{ loading }} </li>
        <li> {{ errored }} </li>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Student',
  data () {
    return {
      students: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('/rest/student/')
      .then(response => {
        this.students = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(this.loading = false)
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
