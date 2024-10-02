import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import SideMenu from './SideMenu.js'
function App() {
  return (
    <div className="App">
      <Header/>
  {/* POSTS CONTAINER */}
  <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
            <Post number= "20" caption=" The react academy"/>
            <Post number="30" caption=" first academy" />
            <Post caption="thank you for joining " />
            <Post />   {/* حطيت قيمة ديفولت بالدالة مال هذا الكومبونينت اذا مدخلنا شي مثل هل حالة فقط استدعينا حتطلع عبارة*/}
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
      </div>
      );
    }
export default App;
