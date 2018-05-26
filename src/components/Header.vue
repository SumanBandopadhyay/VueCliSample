<template>
    <header>
        <nav>
            <ul>
                <router-link to="/" tag="li" exact :style="{ cursor: 'pointer' }">Home</router-link>
                <router-link to="/description" tag="li" exact :style="{ cursor: 'pointer' }">Description</router-link>
                <router-link to="/search" tag="li" exact :style="{ cursor: 'pointer' }">Search</router-link>
                <router-link to="/student" tag="li" exact :style="{ cursor: 'pointer' }">Student</router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 10px;
}

</style>
