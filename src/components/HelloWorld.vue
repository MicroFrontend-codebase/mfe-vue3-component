<template>
  <div>
    <h1>Coundster 23: {{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    return {
      counter,
    }
  },
}
</script>

<style>
h1 {
  color: blue;
}
button {
  padding: 8px 16px;
  font-size: 16px;
}
</style>
