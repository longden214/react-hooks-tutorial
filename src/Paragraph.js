import {useContext} from "react"
import {themeContext} from "./App"

function Paragraph() {
    // B3. Consumer
    const theme = useContext(themeContext)

    return (
      <div className={theme}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque reprehenderit dolores consequuntur quis,
         aliquam est necessitatibus vitae, adipisci distinctio nisi quo consequatur,
          ut inventore officiis enim voluptatem in nam blanditiis.
      </div>
    );
  }
  
  export default Paragraph;