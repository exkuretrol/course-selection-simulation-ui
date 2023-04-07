import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const initialValues = {
  course1: "",
  class1: "",
  course2: "",
  class2: "",
  course3: "",
  class3: "",
  course4: "",
  class4: "",
  course5: "",
  class5: "",
  course6: "",
  class6: "",
  course7: "",
  class7: "",
  course8: "",
  class8: "",
  course9: "",
  class9: "",
  course10: "",
  class10: "",
  course11: "",
  class11: "",
  course12: "",
  class12: "",
}

export default function CourseInputForm() {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <div className="mx-auto flex flex-col gap-y-2">
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2 max-w-sm">
          <Input
            value={values.course1}
            onChange={handleInputChange}
            type="text"
            name="course1"
            placeholder="科目代號"
          />
          <Input
            value={values.class1}
            onChange={handleInputChange}
            type="text"
            name="class1"
            placeholder="班級代號"
          />
        </div>
      </div>

      {values.class1 != "" && values.course1 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course2}
              onChange={handleInputChange}
              type="text"
              name="course2"
              placeholder="科目代號"
            />
            <Input
              value={values.class2}
              onChange={handleInputChange}
              type="text"
              name="class2"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class2 != "" && values.course2 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course3}
              onChange={handleInputChange}
              type="text"
              name="course3"
              placeholder="科目代號"
            />
            <Input
              value={values.class3}
              onChange={handleInputChange}
              type="text"
              name="class3"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class3 != "" && values.course3 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course4}
              onChange={handleInputChange}
              type="text"
              name="course4"
              placeholder="科目代號"
            />
            <Input
              value={values.class4}
              onChange={handleInputChange}
              type="text"
              name="class4"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class4 != "" && values.course4 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course5}
              onChange={handleInputChange}
              type="text"
              name="course5"
              placeholder="科目代號"
            />
            <Input
              value={values.class5}
              onChange={handleInputChange}
              type="text"
              name="class5"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class5 != "" && values.course5 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course6}
              onChange={handleInputChange}
              type="text"
              name="course6"
              placeholder="科目代號"
            />
            <Input
              value={values.class6}
              onChange={handleInputChange}
              type="text"
              name="class6"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class6 != "" && values.course6 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course7}
              onChange={handleInputChange}
              type="text"
              name="course7"
              placeholder="科目代號"
            />
            <Input
              value={values.class7}
              onChange={handleInputChange}
              type="text"
              name="class7"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class7 != "" && values.course7 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course8}
              onChange={handleInputChange}
              type="text"
              name="course8"
              placeholder="科目代號"
            />
            <Input
              value={values.class8}
              onChange={handleInputChange}
              type="text"
              name="class8"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class8 != "" && values.course8 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course9}
              onChange={handleInputChange}
              type="text"
              name="course9"
              placeholder="科目代號"
            />
            <Input
              value={values.class9}
              onChange={handleInputChange}
              type="text"
              name="class9"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class9 != "" && values.course9 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course10}
              onChange={handleInputChange}
              type="text"
              name="course10"
              placeholder="科目代號"
            />
            <Input
              value={values.class10}
              onChange={handleInputChange}
              type="text"
              name="class10"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class10 != "" && values.course10 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course11}
              onChange={handleInputChange}
              type="text"
              name="course11"
              placeholder="科目代號"
            />
            <Input
              value={values.class11}
              onChange={handleInputChange}
              type="text"
              name="class11"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      {values.class11 != "" && values.course11 != "" && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 max-w-sm">
            <Input
              value={values.course12}
              onChange={handleInputChange}
              type="text"
              name="course12"
              placeholder="科目代號"
            />
            <Input
              value={values.class12}
              onChange={handleInputChange}
              type="text"
              name="class12"
              placeholder="班級代號"
            />
          </div>
        </div>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="subtle">送出</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>選課模擬</DialogTitle>
            <DialogDescription>送出成功</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            {/* <Button type="submit" onClick>OK</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {values.course1 != "" && (
        <Button
          variant="destructive"
          onClick={() => {
            setValues({
              course1: "",
              class1: "",
              course2: "",
              class2: "",
              course3: "",
              class3: "",
              course4: "",
              class4: "",
              course5: "",
              class5: "",
              course6: "",
              class6: "",
              course7: "",
              class7: "",
              course8: "",
              class8: "",
              course9: "",
              class9: "",
              course10: "",
              class10: "",
              course11: "",
              class11: "",
              course12: "",
              class12: "",
            })
          }}
        >
          <Icons.trash className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
