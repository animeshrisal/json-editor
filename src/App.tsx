import { createSignal } from "solid-js";
import "./App.scss";
import { AiOutlinePlus } from 'solid-icons/ai'

function App() {

  const [file, setFile] = createSignal<File | null>(null);
  const [isOnHover, setIsOnHover] = createSignal<boolean>(false);

  const handleDrop = (e: any) => {
    e.preventDefault();
    console.log(e)

  }

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("REEEEE")
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
    <div class="container">
      <div
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        class={`${isOnHover() ? 'dropzone-hover' : 'dropzone'}`}>
        <div class='icon-container'>
          <AiOutlinePlus size={128} style={{ fill: 'white' }} color='#000000' />
        </div>
      </div>
      <div class="helper-text">
        <span>Add JSON File</span>
      </div>
    </div>
  );
}

export default App;
