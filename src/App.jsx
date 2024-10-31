import {BrowserRouter,Routes,Route} from "react-router-dom"
import EmployeePage from "./Paages/EmployeePage"
import {Provider} from "react-redux"
import store from "./Redux/Store"
import ShowEmployee from "./Paages/ShowEmployee"
import UpdateData from "./Paages/UpdateData"

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmployeePage/>}/>
      <Route path="showemployee" element={<ShowEmployee/>}/>
      <Route path="/updateData/:pos" element={<UpdateData/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}

export default App
