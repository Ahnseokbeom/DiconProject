<template>
<header>
    <h1>hello</h1>
    <nav>
        <span>hello1</span>
        <span>hello2</span>
        <span>hello3</span>
    </nav>
</header>
    <div class="box">
        <h1>checkbox</h1>
        <p>{{ value }}</p>
        <hr/>
        <input type="checkbox" v-model="value"/>
        <div id="hello" v-show="value">Hello Vue.js</div>
    </div>
</template>

<script>
    export default {
        name: 'mainPage',
        data() {
            return {value: false};
        }
    }
</script>
<style scoped="scoped">
    div.box {
        display: inline-block;
        padding: 20px;
        width: 300px;
        border: 1px solid gray;
        box-shadow: 5px 5px 5px #aaa;
    }
    p {
        font-size: 15pt;
        color: blue;
    }
    input {
        width: 30px;
        height: 30px;
    }
    div#hello {
        margin-top: 20px;
        padding: 20px;
        background-color: lightGreen;
        border: 1px solid gray;
        text-align: center;
        font-size: 20pt;
    }
    header{
        position:fixed;
        height: 75px;
        padding: 1rem;
        color: white;
        background: teal;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
</style>