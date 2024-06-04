
import { Checkbox } from "@/components/ui/checkbox"
import { useReportCheckboxStore } from "@/store/reportCheckboxStore"
import { Label } from "@radix-ui/react-label"


export function ReportCheckbox() {

  const checkboxState = useReportCheckboxStore(state => state.isChecked)
  const toggleCheckbox = useReportCheckboxStore(state => state.toggleCheckbox)

  return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" onClick={() => toggleCheckbox()} checked = {checkboxState.valueOf()}/>
        <Label
          htmlFor="terms"
          className="font-medium"
        >
          Declaro que li e compreendi as informações acima, e desejo prosseguir com a manifestação.
        </Label>
      </div>
  )
}
