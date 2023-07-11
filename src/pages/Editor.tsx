import { createSignal } from "solid-js";
import "./Editor.scss";
import Content from "../components/Content";
import Modal from "../components/Modal";

function Editor() {

  const [data, setData] = createSignal<Array<Object>>(JSON.parse(JSON.parse(localStorage.getItem("pokemon_data")!)));
  const [format, setFormat] = createSignal<Object>({});
  const [key, setKeys] = createSignal<string[]>([])
  const [isModalOpen, setIsModalOpen] = createSignal<boolean>(false);

  const addEntry = () => {
    // setKeys(value => ['test', ...value])
  }

  const save = () => {
    console.log("ASDASD")
  }

  const handleClick = () => {
    console.log("REEEE")
    setIsModalOpen((value) => !value)
  }

  const getFormat = () => {
    setKeys(Object.keys(data()[0]))
  }

  getFormat()

  return (
    <div class="editor-container">
      <div class="header" />
      <div class="body">
        <div class={`json-content ${isModalOpen() && 'disable-scroll'}`}>
          <div >{key().map(x => <Content test={x} />)}</div>
        </div>
        <div class="main-menu">
          <div class="main-body">
            <Modal onClick={(value) => setIsModalOpen(value)} isOpen={isModalOpen}>
              Test
            </Modal>
          </div>
          <div class="button-group">
            <button onClick={handleClick} class='add-button'>Add Entry</button>
            <button onClick={addEntry} class='editor-button'>Export</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor;