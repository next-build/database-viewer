<template>
    <TransitionRoot as="template" :show="modelValue">
        <Dialog class="relative z-10">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 " />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                                <!-- <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                        <button type="button"
                                            class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            @click="open = false">
                                            <span class="absolute -inset-2.5" />
                                            <span class="sr-only">Close panel</span>
                                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </TransitionChild> -->
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="flex px-4 sm:px-6">
                                        <DialogTitle class="flex-1 text-base font-semibold leading-6 text-gray-900">
                                            {{ title }}
                                        </DialogTitle>
                                        <button 
                                            type="button"
                                            class="flex-2 relative rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                            @click="emit('update:modelValue', false)"
                                        >
                                            <span class="absolute -inset-2.5" />
                                            <span class="sr-only">Close panel</span>
                                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                        <slot />
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    }
});

const emit = defineEmits(['update:modelValue'])
</script>