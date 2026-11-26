import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField, ListBox, Select} from "@heroui/react";

const AddTaskPage = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center text-blue-600">Add a new task</h1>
            <Form className="flex w-96 flex-col gap-4 max-w-7xl mx-auto mt-4 border p-6 rounded-md shadow-md">
                <TextField
                    isRequired
                    name="title"
                    type="text">
                    <Label>Title</Label>
                    <Input placeholder="Learn MongoDB" />
                    <FieldError />
                </TextField>
                <TextField
                isRequired
                name="description"
                type="text">
                <Label>Description</Label>
                <Input placeholder="Write about your todo in detail" />
                <FieldError />
            </TextField>

            <Select placeholder="Select one">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="high" textValue="high">
            High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="low" textValue="low">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="medium" textValue="medium">
            Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          </ListBox>
      </Select.Popover>
    </Select>

    <TextField
                isRequired
                name="category"
                type="text">
                <Label>Category</Label>
                <Input placeholder="Category of your todo" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="tags"
                type="text">
                <Label>Tags</Label>
                <Input placeholder="Example = MOngoDB, Node.js, Backend" />
                <FieldError />
            </TextField>
            <div className="flex gap-2">
                <Button type="submit">
                <Check />
                Submit
                </Button>
                <Button type="reset" variant="secondary">
                Reset
                </Button>
            </div>
            </Form>
        </div>
    )
}

export default AddTaskPage;