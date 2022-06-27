<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal mx-auto">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <!-- Modal content -->

          <slot></slot>
          <button @click="close" type="button" class="flex items-center justify-center w-20 px-3 py-2 my-3 mx-32 bg-red-800 text-white rounded-md shadow-md">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255, 0.7);

  .modal-inner {
    position: relative;
    width: 80%;
    padding: 64px 16px;
    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
    button {
      padding: 10px 20px;
      border: none;
      font-size: 16px;
      background-color: crimson;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
