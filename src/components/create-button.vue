<script>
export default {}
</script>

<template>
  <div>
    <button>create project</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
button {
  border-radius: 30px;
  background-color: rgb(96, 217, 86);
  color: white;
  box-shadow: rgba(34, 45, 57, 0.02) 1px 0px 0px inset,
    rgba(34, 45, 57, 0.02) -1px 0px 0px inset,
    rgba(34, 45, 57, 0.02) 0px 1px 0px inset,
    rgba(34, 45, 57, 0.03) 0px -1px 0px inset,
    rgba(34, 45, 57, 0.02) 0px 0px 0px 1px inset,
    rgba(25, 64, 22, 0.1) 0px 1px 2px 0px;
  text-shadow: rgba(12, 16, 20, 0.05) 0px 1px 0px;
  font-weight: 500;
  -webkit-appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  outline-style: none;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  margin: 0px;
  padding: 10px 20px;
  border-style: none;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  &:hover {
    background-color: rgb(68, 197, 83);
    box-shadow: rgba(34, 45, 57, 0.02) 1px 0px 0px inset,
      rgba(34, 45, 57, 0.02) -1px 0px 0px inset,
      rgba(34, 45, 57, 0.02) 0px 1px 0px inset,
      rgba(34, 45, 57, 0.03) 0px -1px 0px inset,
      rgba(34, 45, 57, 0.02) 0px 0px 0px 1px inset,
      rgba(25, 64, 22, 0.1) 0px 2px 4px 0px;
    transform: translateY(-1px);
  }
}
</style>
