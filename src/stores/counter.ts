import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const ModleType = ref("dark")
  function setModel(){
    ModleType.value = ModleType.value == "dark" ? "light" : "dark"
    console.log(ModleType.value);
    
  }
  return { ModleType, setModel}
})
