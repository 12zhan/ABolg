<script setup lang="ts">
import { ref, onMounted } from 'vue';
defineProps<{
    img: string,
    title: string,
}>()
const dialog = ref(false);

</script>
<template>

    <mdui-dialog :open="dialog">
        <mdui-text-field style="margin: 10px 0;--mdui-color-background:var(--mdui-color-surface-container-high)" variant="outlined" label="Title">

        </mdui-text-field>
        <mdui-text-field style="--mdui-color-background:var(--mdui-color-surface-container-high)" variant="outlined" label="Url">

        </mdui-text-field>

        <mdui-button slot="action" variant="text" :onclick="()=>{dialog = false;}">取消</mdui-button>
        <mdui-button slot="action" variant="tonal">删除</mdui-button>

    </mdui-dialog>

    <mdui-dropdown trigger="contextmenu" open-on-pointer>
        <mdui-card slot="trigger" variant="outlined"
            style="margin:10px;width: 150px;padding: 10px;display: flex;align-items: center;">
            <mdui-card clickable variant="filled"
                style="width: 30px;height: 30px;display: flex;align-items: center;justify-content: center;">
                <img :src="img" alt="" height="50%">
            </mdui-card>

            <span style="margin: 10px;">
                {{ title }}
            </span>

        </mdui-card>
        <mdui-menu style="border-radius: var(--mdui-shape-corner-large);">
            <mdui-menu-item :onclick="()=>{dialog = true;}">修改信息</mdui-menu-item>
            <mdui-menu-item :onclick="()=>{dialog = true;}">删除收藏</mdui-menu-item>
        </mdui-menu>
    </mdui-dropdown>

</template>