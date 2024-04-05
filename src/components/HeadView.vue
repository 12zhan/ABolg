<script setup lang="ts">
import { config } from '../config'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const SelectPage = ref("home")
const store = useCounterStore()
</script>
<template>
    <div id="box">
        <span class="title">{{ config["title"] }}</span>
        <div style="margin-right: 10px;display: flex;align-items: center;justify-content: space-evenly;">
            <mdui-switch @change="store.setModel()" :checked="store.ModleType == 'dark' ? true : false" style="margin: 5px;">
                <mdui-icon slot="unchecked-icon" name="light_mode"></mdui-icon>
                <mdui-icon slot="checked-icon" name="dark_mode"></mdui-icon>
            </mdui-switch>

            <a :href="config['github']"><img height="35x" src="/github.svg"/></a>
            

            <RouterLink style="margin: 5px;" to="/">
                <mdui-button @click="() => { SelectPage = 'home' }"
                    :variant="SelectPage == 'home' ? 'tonal' : 'text'">Home</mdui-button>
            </RouterLink>

            <RouterLink style="margin: 5px;" to="/about">
                <mdui-button @click="() => { SelectPage = 'about' }"
                    :variant="SelectPage == 'about' ? 'tonal' : 'text'">About</mdui-button>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped lang="scss">
#box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 18px;
        margin-left: 20px;
    }
}
</style>