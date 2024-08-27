<template>
    <div class="">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton>
                    <slot name="toggle"></slot>
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                    <div 
                        v-for="(item, index) in items" :key="index"
                        class="px-1 py-1"
                    >
                        <slot :name="item.key" :data="item"></slot>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup>
import { 
    Menu,
    MenuButton,
    MenuItems,
    MenuItem 
} from '@headlessui/vue';

defineProps({
    items: Array,
});
</script>