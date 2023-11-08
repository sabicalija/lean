// import { useMediaQuery } from "@vueuse/core";
import { ref } from "vue";

export function useSidebar() {
  // const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);

  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function toggle() {
    isOpen.value ? close() : open();
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
