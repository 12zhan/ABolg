<script setup lang="ts">
import HeadImages from '@/components/HeadImages.vue'
import CollectItem from '@/components/CollectItem.vue'
import { config } from '@/config';
</script>

<template>

  <HeadImages style="height: 150px;width: 150px;"
    url="http://q.qlogo.cn/headimg_dl?spec=640&amp;img_type=jpg&amp;dst_uin=1323613811"></HeadImages>
  <br>
  <br>
  <div style="margin-left: 20px;">
    <span style="font-size: 15px;">Author：</span>
    <span style="font-size: 13px;color: #808080;">{{ config.author }}</span>
  </div>


  <mdui-tabs value="tab-1" style="margin-top: 10px;position: sticky;top: 60px;">
    
    <mdui-tab value="tab-1">网络安全</mdui-tab>
    <mdui-tab value="tab-2">编程开发</mdui-tab>
    <mdui-tab value="tab-3">其他</mdui-tab>



    <mdui-tab-panel slot="panel" value="tab-1" style="height: 1000px;">
      <div>
        <div style="width: fit-content;padding: 20px;display: flex;justify-content: start;margin: 10px">

          <CollectItem img="https://translate.google.com/favicon.ico" title="谷歌翻译"></CollectItem>
          <CollectItem img="https://translate.google.com/favicon.ico" title="谷歌翻译"></CollectItem>
        </div>
      </div>

    </mdui-tab-panel>

    <mdui-tab-panel slot="panel" value="tab-2">Panel 2</mdui-tab-panel>
    <mdui-tab-panel slot="panel" value="tab-3">Panel 3</mdui-tab-panel>
  </mdui-tabs>




</template>
