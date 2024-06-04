import {create} from "zustand"

type IReportCheckboxStore = {
    isChecked: boolean
    toggleCheckbox: () => void
}

export const useReportCheckboxStore = create<IReportCheckboxStore>((set) => {
    return {
        isChecked: false,
        toggleCheckbox: () => set((state) => ({isChecked: !state.isChecked}))
    }
})