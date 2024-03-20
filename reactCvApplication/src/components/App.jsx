import React from "react"
import '../styles/index.css'
import Header from "./Header"

export default function App() {
return (
<>
<Header></Header>
<div className="container">
<div className="left-side">
<h3>leftSide</h3>
</div>

<div className="right-side">
<h3>rightSide</h3>
</div>

</div>


</>

)
}
