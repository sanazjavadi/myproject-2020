<script>
export default {
  data: function() {
    return {}
  },
  created() {},
  methods: {
    createdProject() {},
  },
}
</script>

<template>
  <div>
    <router-link to="/createproject">
      <button @click="createdProject">ایجاد پروژه</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
button {
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 0;
  font-weight: 500;
  color: white;
  text-align: center;
  text-decoration: none;
  text-shadow: rgba(12, 16, 20, 0.05) 0 1px 0;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  background-color: rgb(96, 217, 86);
  border-style: none;
  border-radius: 30px;
  outline-style: none;
  box-shadow: rgba(34, 45, 57, 0.02) 1px 0 0 inset,
    rgba(34, 45, 57, 0.02) -1px 0 0 inset, rgba(34, 45, 57, 0.02) 0 1px 0 inset,
    rgba(34, 45, 57, 0.03) 0 -1px 0 inset,
    rgba(34, 45, 57, 0.02) 0 0 0 1px inset, rgba(25, 64, 22, 0.1) 0 1px 2px 0;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-appearance: none;
  &:hover {
    background-color: rgb(68, 197, 83);
    box-shadow: rgba(34, 45, 57, 0.02) 1px 0 0 inset,
      rgba(34, 45, 57, 0.02) -1px 0 0 inset,
      rgba(34, 45, 57, 0.02) 0 1px 0 inset,
      rgba(34, 45, 57, 0.03) 0 -1px 0 inset,
      rgba(34, 45, 57, 0.02) 0 0 0 1px inset, rgba(25, 64, 22, 0.1) 0 2px 4px 0;
    transform: translateY(-1px);
  }
}
</style>
