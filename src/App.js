import "./assets/app.scss";
import "./assets/container.scss";
import "./assets/general.scss";
import AddComments from "./components/add-comments/add-comments";
import Comments from "./components/comments/comments";
import CreateFeedback from "./screens/createFeedback/createFeedback";
import EditFeedback from "./screens/editFeedback/editFeedback";
// import InfoDesk from "./components/info-desk/info-desk";
// import MainDesk from "./components/main-desk/main-desk";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__content">
          {/* <InfoDesk></InfoDesk>
          <MainDesk></MainDesk> */}
        </div>
        <div className="container-comment">
          <Comments />
          <AddComments />
          {/* <EditFeedback />
          <CreateFeedback /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
