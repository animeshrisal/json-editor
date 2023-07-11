import { Accessor, JSX, Show, createSignal } from "solid-js";
import { Portal } from "solid-js/web"
import "./index.scss"
import { VsChromeClose } from 'solid-icons/vs'

interface Props {
  isOpen: Accessor<boolean>;
  onClick: (value: boolean) => void;
  children: JSX.Element;
}

const Modal = ({ isOpen, onClick, children }: Props) => {

  console.log(isOpen)
  return (
    <Show when={isOpen()}>
      <div class="modal-body">
        <div class="modal-container">
          <div class="modal-icon" onClick={() => onClick(!isOpen)}>
            <VsChromeClose />
          </div>
          {children}
        </div>
        <div class='backdrop' />
      </div>
    </Show>
  )
}

export default Modal;