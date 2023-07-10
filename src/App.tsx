import { Show, createSignal } from "solid-js";
import "./App.scss";
import { AiOutlinePlus } from 'solid-icons/ai'

const { listen } = await import('@tauri-apps/api/event')

function App() {

  const [isFile, setIsFile] = createSignal<boolean>(false);
  const [isOnHover, setIsOnHover] = createSignal<boolean>(false);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOnHover(false)

    if (e.dataTransfer) {
      console.log("REEE")
      setIsFile(true)
    }

  }

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOnHover(true)

  };
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOnHover(false)
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Show when={!isFile()} fallback={<div class='icon-container'>File uploaded!</div>}>
      <div class="container">
        <div
          onDrop={e => handleDrop(e)}
          onDragOver={e => handleDragOver(e)}
          onDragEnter={e => handleDragEnter(e)}
          onDragLeave={e => handleDragLeave(e)}
          class={`${isOnHover() ? 'dropzone-hover' : 'dropzone'}`}>
          <div class='icon-container'>
            <AiOutlinePlus size={128} style={{ fill: 'white' }} color='#000000' />
            <span>Add JSON File</span>
          </div>
        </div>
      </div>
    </Show>
  )
}

export default App;
