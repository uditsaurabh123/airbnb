// Directory: /app/counter/_store/index.ts

import { create } from 'zustand';
// Action types


// useCounterStore
export const useSavePropertiesStore = create((set) => ({
    savedProperties: [],
    increase: () => set((state) => ({ savedProperties: [...savedProperties, state] })),
    decrease: () => set((state) => ({
        savedProperties: state.filter((item) => {
            if 
    })
    }),
}));

