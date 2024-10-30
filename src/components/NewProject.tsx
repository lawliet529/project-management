import { useRef } from "react";
import Input from "./Input";
import Project from "../model/Project";
import Modal, { ModalHandle } from "./Modal";

function NewProject({
  onAdd,
  onCancel,
}: {
  onAdd: (project: Project) => void;
  onCancel: () => void;
}) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);
  const modal = useRef<ModalHandle>();

  function handleSave() {
    const enteredTitle = title.current!.value;
    const enteredDescription = description.current!.value;
    const enteredDueDate = dueDate.current!.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current!.open();
      return;
    } else {
      console.log("Passed");
    }

    onAdd({
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-60">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title"></Input>
          <Input ref={description} label="Description" textarea></Input>
          <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
      </div>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-900 my-2">Invalid Input</h2>
        <p className="text-stone-700">
          Please enter valid values for all input
        </p>
      </Modal>
    </>
  );
}

export default NewProject;
